type SortOrder = 'desc' | 'asc';

export const sortByCreatedBy = (order: SortOrder) => (a, b) => {
  if (order === 'desc') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  if (order === 'asc') return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  return 0;
};