import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TABLE_HEADERS } from '../../constants';
import { SortingOrder, TableRow } from '../../types';
import { defineSortingAC } from '../../redux/actions';
import { filterRows } from '../../utils/filterRows';
import { sortTableData } from '../../utils/sortTableData';
import { defineSortingOrder } from '../../utils/defineSortingOrder';

interface RootState {
  tableData: TableRow[],
  rowsPerPage: number,
  pageNumber: number,
  sortingFieldIndex: number,
  sortingOrder: SortingOrder,
  filterString: string,
}

export const Table = () => {
  const dispatch = useDispatch();
  const sortingOptions = useSelector((state: RootState) => ({
    sortingFieldIndex: state.sortingFieldIndex,
    sortingOrder: state.sortingOrder,
  }));

  const tableData = useSelector((state: RootState) =>
    filterRows(state.tableData, state.filterString)
      .sort(sortTableData(state.sortingFieldIndex, state.sortingOrder))
      .slice(state.rowsPerPage * (state.pageNumber - 1), state.rowsPerPage * state.pageNumber));

  const handleSort = (index: number) => {
    const sortingOrder = defineSortingOrder(index, sortingOptions);
    dispatch(defineSortingAC({ sortingFieldIndex: index, sortingOrder }));
  };

  return (
    <table>
      <thead>
        <tr>
          {TABLE_HEADERS.map((header, index) => (
            <th
              key={header}
              onClick={() => handleSort(index)}
              className="header"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={`row-${row[0]}`}>
            {row.map((ceil, index) => (
              <td
                key={`${row[0]}_${TABLE_HEADERS[index]}`}
                className={(index) ? 'notFirstCol' : 'firstCol'}
              >
                {ceil}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
