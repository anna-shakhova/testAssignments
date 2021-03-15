import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterAC, setRowsPerPageAC } from '../../redux/actions';
import { ROWS_PER_PAGE } from '../../constants';

interface RootState {
  filterString: string,
  rowsPerPage: number,
}

export const Filter = () => {
  const dispatch = useDispatch();
  const { filterString, rowsPerPage } = useSelector((state: RootState) => ({
    filterString: state.filterString,
    rowsPerPage: state.rowsPerPage,
  }));

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterAC(event.target.value));
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRowsPerPageAC(Number(event.target.value)));
  };

  return (
    <div className="filter">
      <input
        value={filterString}
        onChange={(event) => handleFilter(event)}
        placeholder="Search"
      />
      <label htmlFor="rowsNumSelect">Rows per page</label>
      <select
        id="rowsNumSelect"
        onChange={(event) => handleChangeRowsPerPage(event)}
        defaultValue={rowsPerPage}
      >
        {ROWS_PER_PAGE.map((el) => (
          <option key={el} value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};
