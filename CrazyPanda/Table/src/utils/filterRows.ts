import { TableRow } from '../types';

const stringifyData = (data: number | string) => data.toString().toLowerCase();

export const filterRows = (tableData: TableRow[], filterString: string) => {
  const filter = filterString.toLowerCase();
  return tableData.filter((row) => row.some((el) => stringifyData(el).includes(filter)));
};
