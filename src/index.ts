import { read, utils, WorkSheet, writeFile } from 'xlsx'
import {
  loopThroughRange,
  rangeTraverser,
  rangeTraverserIndexedByAddr,
} from './utils'

import type { SlDialog } from '@shoelace-style/shoelace'
import type { WorkBook } from 'xlsx'

const [TEMPLATE_RANGE, SOURCE_RANGE] = ['B3:AM37', 'A1:AA22']

let template: WorkSheet, source: WorkSheet
let tWorksheet: WorkSheet, tWorkbook: WorkBook

function handleFile(e, isTemplate: boolean) {
  const f = e.target.files[0]
  const reader = new FileReader()
  reader.onload = async function (e) {
    const data = new Uint8Array(e.target.result as any)
    const workbook = read(data, { type: 'array', cellText: true })
    await (isTemplate ? templateEditor(workbook) : editor(workbook))
  }
  reader.readAsArrayBuffer(f)
}

async function templateEditor(workbook: WorkBook) {
  // Open dialog
  tWorkbook = workbook
  const templateDialog = document.getElementById(
    'upload-template-dialog'
  ) as SlDialog
  templateDialog.innerHTML = `
  <sl-select id="upload-template-dialog-select">
  ${workbook.SheetNames.map((n) => {
    return `<sl-menu-item value="${n}">${n}</sl-menu-item>`
  }).join('')}
  </sl-select>
  <sl-button type="primary" id="upload-template-dialog-close">确认</sl-button>
  `

  templateDialog.show()

  // Close dialog
  const templateDialogClose = document.getElementById(
    'upload-template-dialog-close'
  )

  templateDialogClose.onclick = () => {
    // Read worksheet
    templateDialog.hide()
    const select = document.getElementById(
      'upload-template-dialog-select'
    ) as HTMLSelectElement
    tWorksheet = tWorkbook.Sheets[select.value]
    template = rangeTraverserIndexedByAddr(tWorksheet, TEMPLATE_RANGE)
    console.log(template)
  }
}

async function editor(workbook: WorkBook) {
  // Open dialog
  const templateDialog = document.getElementById('upload-dialog') as SlDialog
  templateDialog.innerHTML = `
   <sl-select id="upload-dialog-select">
   ${workbook.SheetNames.map((n) => {
     return `<sl-menu-item value="${n}">${n}</sl-menu-item>`
   }).join('')}
   </sl-select>
   <sl-button type="primary" id="upload-dialog-close">确认</sl-button>
   `

  templateDialog.show()

  // Close dialog
  const templateDialogClose = document.getElementById('upload-dialog-close')

  templateDialogClose.onclick = () => {
    // Read worksheet
    templateDialog.hide()
    const select = document.getElementById(
      'upload-dialog-select'
    ) as HTMLSelectElement
    const worksheet = workbook.Sheets[select.value]
    source = rangeTraverser(worksheet, SOURCE_RANGE)
    console.log(source)
  }
}

function fillSheet() {
  loopThroughRange(TEMPLATE_RANGE, (c: number, r: number) => {
    const col = template[c]
    if (col) {
      let { rowHeader, colHeader } = template[c][r] ?? {}
      if (rowHeader && colHeader) {
        const sourceCol = source[colHeader]
        if (sourceCol) {
          const val = sourceCol[rowHeader]
          const addr = utils.encode_cell({ r, c })
          tWorksheet[addr] = { v: val }
        }
      }
    }
  })

  console.log(tWorksheet, tWorkbook)
  writeFile(tWorkbook, '结果.xlsx')
}

// Btn to listen on
const uploadTemplateBtn = document.getElementById('upload-template-btn')
const uploadBtn = document.getElementById('upload-btn')
const processBtn = document.getElementById('process-btn')

// Event bindings
uploadTemplateBtn.addEventListener('change', (e) => {
  handleFile(e, true)
  uploadTemplateBtn.parentElement.parentElement.classList.remove('active')
  uploadBtn.parentElement.parentElement.classList.add('active')
})

uploadBtn.addEventListener('change', (e) => {
  handleFile(e, false)
  uploadBtn.parentElement.parentElement.classList.remove('active')
  processBtn.parentElement.classList.add('active')
})

processBtn.addEventListener('click', fillSheet)
