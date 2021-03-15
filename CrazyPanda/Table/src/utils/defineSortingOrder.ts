import { SortingOptions, SortingOrder } from '../types';

export const defineSortingOrder = (index: number, sortingOptions: SortingOptions) => {
  if (index === sortingOptions.sortingFieldIndex) return (0 - sortingOptions.sortingOrder);
  return SortingOrder.ASCENDING;
};
