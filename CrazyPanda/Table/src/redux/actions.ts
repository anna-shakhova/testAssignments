import {
  DEFINE_SORTING,
  SET_FILTER,
  SET_PAGE_NUMBER,
  SET_ROWS_PER_PAGE,
} from './actionTypes';
import { SortingOptions } from '../types';

export const setPageNumberAC = (pageNum: number) => ({
  type: SET_PAGE_NUMBER,
  payload: pageNum,
});

export const defineSortingAC = (sortingOptions: SortingOptions) => ({
  type: DEFINE_SORTING,
  payload: { ...sortingOptions },
});

export const setFilterAC = (filterString: string) => ({
  type: SET_FILTER,
  payload: filterString,
});

export const setRowsPerPageAC = (rowsPerPage: number) => ({
  type: SET_ROWS_PER_PAGE,
  payload: rowsPerPage,
});
