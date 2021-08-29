declare type RangeFilter = {
  from: {
    row: number
    column: number
  }
  to: {
    row: number
    column: number
  }
  header?: {
    row: number
    column: number
  }
}

declare type HeaderIndexedCell = {
  [ColHeader: string]: { [RowHeader: string]: string }
}
