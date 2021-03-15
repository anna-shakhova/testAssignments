export const getPagesRange = (currentPage: number, maxShownPages: number, pagesCount: number) => {
  // eslint-disable-next-line max-len
  const startPage = Math.max(Math.min(pagesCount - maxShownPages + 1, Math.ceil(currentPage - maxShownPages / 2)), 1);
  // eslint-disable-next-line max-len
  const lastPage = Math.min(Math.max(maxShownPages, Math.floor(currentPage + maxShownPages / 2)), pagesCount);

  return Array.from({ length: lastPage - startPage + 1 }, (_, i) => i + startPage);
};
