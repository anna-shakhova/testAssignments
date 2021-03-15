import { SortingOrder, TableRow } from '../types';

export const sortTableData = (index: number, sortingOrder: SortingOrder) =>
  (a: TableRow, b: TableRow) => ((a[index] > b[index]) ? sortingOrder : -sortingOrder);
