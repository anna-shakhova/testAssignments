import {
  DEFINE_SORTING,
  SET_FILTER,
  SET_PAGE_NUMBER,
  SET_ROWS_PER_PAGE,
} from './actionTypes';
import { TABLE_DATA } from '../constants';
import { SortingOptions, SortingOrder } from '../types';

const initialState = {
  tableData: TABLE_DATA,
  rowsPerPage: 25,
  pageNumber: 1,
  maxShownPages: 3,
  sortingFieldIndex: 0,
  sortingOrder: SortingOrder.ASCENDING,
  filterString: '',
};

interface Action {
  type: string,
  payload: number | string | SortingOptions,
}

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload as number,
      };

    case DEFINE_SORTING:
      return {
        ...state,
        sortingFieldIndex: (action.payload as SortingOptions).sortingFieldIndex,
        sortingOrder: (action.payload as SortingOptions).sortingOrder,
      };

    case SET_FILTER:
      return {
        ...state,
        filterString: action.payload as string,
        pageNumber: 1,
      };

    case SET_ROWS_PER_PAGE:
      return {
        ...state,
        rowsPerPage: action.payload as number,
      };

    default:
      return state;
  }
};
