import Excel from 'exceljs'
import { excelDownloader, fillSheet, rangeTraverser } from './utils'

import type { SlDialog } from '@shoelace-style/shoelace'
import type { Workbook, Worksheet } from 'exceljs'

const [TEMPLATE_RANGE, SOURCE_RANGE]: [RangeFilter, RangeFilter] = [
  {
    from: { column: 2, row: 3 },
    to: { column: 39, row: 37 },
    header: {
      row: 4,
      column: 2,
    },
  },
  {
    from: { column: 1, row: 1 },
    to: { column: 27, row: 22 },
    header: {
      row: 1,
      column: 1,
    },
  },
]

let source: HeaderIndexedCell
let tWorksheet: Worksheet, tWorkbook: Workbook

function handleFile(e, isTemplate: boolean) {
  const f = e.target.files[0]
  const reader = new FileReader()
  reader.onload = async function (e) {
    const data = new Uint8Array(e.target.result as any)
    const workbook = new Excel.Workbook()
    await workbook.xlsx.load(data)
    await (isTemplate ? templateEditor(workbook) : editor(workbook))
  }
  reader.readAsArrayBuffer(f)
}

async function templateEditor(workbook: Workbook) {
  // Open dialog
  tWorkbook = workbook
  const templateDialog = document.getElementById(
    'upload-template-dialog'
  ) as SlDialog
  templateDialog.innerHTML = `
  <sl-select id="upload-template-dialog-select">
  ${workbook.worksheets
    .map(({ name: n }) => {
      return `<sl-menu-item value="${n}">${n}</sl-menu-item>`
    })
    .join('')}
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
    tWorksheet = tWorkbook.getWorksheet(select.value)
  }
}

async function editor(workbook: Workbook) {
  // Open dialog
  const templateDialog = document.getElementById('upload-dialog') as SlDialog
  templateDialog.innerHTML = `
   <sl-select id="upload-dialog-select">
   ${workbook.worksheets
     .map(({ name: n }) => {
       return `<sl-menu-item value="${n}">${n}</sl-menu-item>`
     })
     .join('')}
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
    const worksheet = workbook.getWorksheet(select.value)
    source = rangeTraverser(worksheet, SOURCE_RANGE)
    console.log(source)
  }
}

function fillIn() {
  fillSheet(tWorksheet, source, TEMPLATE_RANGE)
  tWorkbook.xlsx.writeBuffer().then((v) => excelDownloader(v))
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

processBtn.addEventListener('click', fillIn)
