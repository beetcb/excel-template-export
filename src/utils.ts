import { utils } from 'xlsx'
import type { WorkSheet } from 'xlsx'

/**
 * 以列、行分别为一、二级索引
 */
export function rangeTraverser(
  sheet: WorkSheet,
  rangeRaw: string
): { [ColHeader: string]: { [RowHeader: string]: string } } {
  const range = utils.decode_range(rangeRaw)
  const rows = {}
  for (let C = range.s.c; C <= range.e.c; ++C) {
    const colHeader = sheet[getCellRef(C, range.s.r)]?.v
    const fbColHeader = sheet[getCellRef(C, range.s.r + 1)]?.v
    const rowVals = {}
    for (let R = range.s.r; R <= range.e.r; ++R) {
      let rowHeader = sheet[getCellRef(range.s.r, R)]?.v
      const cell_address = { c: C, r: R }
      const cell_ref = utils.encode_cell(cell_address)
      let { v } = sheet[cell_ref] ?? {}
      if (
        !isUndefined(rowHeader) &&
        (!isUndefined(colHeader) || !isUndefined(fbColHeader)) &&
        v
      ) {
        rowHeader = rowHeader.replace(/(\D+)(\d|\w){4}/, (_, g1) => g1)
        rowVals[rowHeader] = v
      }
    }
    if (Object.keys(rowVals).length) {
      rows[colHeader ?? fbColHeader] = rowVals
    }
  }
  return rows
}

/**
 * 以列、行编号分别为一、二级索引
 */
export function rangeTraverserIndexedByAddr(
  sheet: WorkSheet,
  rangeRaw: string
): {
  [Col: string]: { [Row: string]: { rowHeader: string; colHeader: string } }
} {
  const range = utils.decode_range(rangeRaw)
  const rows = {}
  for (let C = range.s.c; C <= range.e.c; ++C) {
    const colHeader = sheet[getCellRef(C, range.s.r)]?.v
    const fbColHeader = sheet[getCellRef(C, range.s.r + 1)]?.v
    const rowVals = {}
    for (let R = range.s.r; R <= range.e.r; ++R) {
      let rowHeader = sheet[getCellRef(range.s.c, R)]?.v
      if (
        !isUndefined(rowHeader) &&
        (!isUndefined(colHeader) || !isUndefined(fbColHeader))
      ) {
        rowHeader = rowHeader
          .toString()
          .replace(/(\D+)(\d|\w){4}/, (_, g1) => g1)
        rowVals[R] = { rowHeader, colHeader: colHeader ?? fbColHeader }
      }
    }

    rows[C] = rowVals
  }
  return rows
}

export function loopThroughRange(
  rangeRaw: string,
  callback: (c: number, r: number) => void
): void {
  const range = utils.decode_range(rangeRaw)
  for (let C = range.s.c; C <= range.e.c; ++C) {
    for (let R = range.s.r; R <= range.e.r; ++R) {
      callback(C, R)
    }
  }
}

function isUndefined(...args) {
  return args.some((x) => x === undefined)
}

function getCellRef(c: number, r: number) {
  const cell_address = { c, r }
  const cell_ref = utils.encode_cell(cell_address)
  return cell_ref
}
