import type { Worksheet } from 'exceljs'

/**
 * 以列、行分别为一、二级索引
 */
export function rangeTraverser(
  sheet: Worksheet,
  range: RangeFilter
): HeaderIndexedCell {
  sheet.autoFilter = range
  const { from, to, header } = range
  const col = {}
  for (let C = from.column; C <= to.column; ++C) {
    const colHeader =
      getCellHeader(sheet, C, header.row) ??
      getCellHeader(sheet, C, header.row - 1)
    const rowVals = {}
    for (let R = from.row; R <= to.row; ++R) {
      if (C === from.column && R === from.row) {
        continue
      }
      let rowHeader = getCellHeader(sheet, header.column, R)
      let { value: v } = sheet.getCell(C, R)
      if (!someUndefinedOrNull(rowHeader, colHeader, v)) {
        rowHeader = rowHeader.replace(/(\D+)(\d|\w){4}/, (_, g1) => g1)
        rowVals[rowHeader] = v
      }
    }
    if (Object.keys(rowVals).length) {
      col[colHeader] = rowVals
    }
  }
  return col
}

/**
 * Browser specific file downloader
 */
export function excelDownloader(arrayBuffer) {
  const blob = new Blob([arrayBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;',
  })
  const url = window.URL.createObjectURL(blob)
  window.location.assign(url)
}

export function fillSheet(
  template: Worksheet,
  source: HeaderIndexedCell,
  range: RangeFilter
) {
  const { from, to, header } = range
  for (let C = from.column; C <= to.column; ++C) {
    const colHeader =
      getCellHeader(template, C, header.row) ??
      getCellHeader(template, C, header.row - 1)
    const sourceCol = source[colHeader]
    if (!sourceCol) {
      continue
    }
    for (let R = from.row; R <= to.row; ++R) {
      let rowHeader = getCellHeader(template, header.column, R)
      if (!someUndefinedOrNull(rowHeader)) {
        rowHeader = rowHeader?.replace(/(\D+)(\d|\w){4}/, (_, g1) => g1)
        const ref = template.getCell(R, C)
        if (!ref.value) {
          ref.value = sourceCol[rowHeader]
        }
      }
    }
  }
}

function someUndefinedOrNull(...args: Array<any>) {
  return args.some((x) => x === undefined || x === null)
}

function getCellHeader(sheet: Worksheet, c: number, r: number) {
  return sheet.getCell(r, c)?.value?.toString()
}
