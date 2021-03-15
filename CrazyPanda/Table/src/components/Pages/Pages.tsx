import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setPageNumberAC } from '../../redux/actions';
import { TableRow } from '../../types';
import { getPagesRange } from '../../utils/getPagesRange';
import { filterRows } from '../../utils/filterRows';

interface RootState {
  tableData: TableRow[],
  rowsPerPage: number,
  pageNumber: number,
  maxShownPages: number,
  filterString: string,
}

export const Pages = () => {
  const dispatch = useDispatch();
  const { currentPage, maxShownPages, pagesCount } = useSelector((state: RootState) => ({
    currentPage: state.pageNumber,
    maxShownPages: state.maxShownPages,
    // eslint-disable-next-line max-len
    pagesCount: Math.ceil(filterRows(state.tableData, state.filterString).length / state.rowsPerPage),
  }));

  const [pages, setPages] = useState(getPagesRange(currentPage, maxShownPages, pagesCount));

  useEffect(() => {
    setPages(getPagesRange(currentPage, maxShownPages, pagesCount));
  }, [currentPage, pagesCount, maxShownPages]);

  const handleGoPageNum = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= pagesCount) dispatch(setPageNumberAC(pageNum));
  };

  return (
    <div className="pages">
      <span onClick={() => handleGoPageNum(currentPage - 1)}>{'<'}</span>
      {pages.map((pageNum) => (
        <span
          key={pageNum}
          onClick={() => handleGoPageNum(pageNum)}
          className={(pageNum === currentPage) ? 'chosen' : ''}
        >
          {pageNum}
        </span>
      ))}
      <span onClick={() => handleGoPageNum(currentPage + 1)}>{'>'}</span>
    </div>
  );
};
