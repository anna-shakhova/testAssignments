/* eslint-disable no-unused-vars */
export type TableRow = [number, string, string, string];

export enum SortingOrder {
  ASCENDING = 1,
  DESCENDING = -1,
}

export interface SortingOptions {
  sortingFieldIndex: number,
  sortingOrder: SortingOrder,
}
