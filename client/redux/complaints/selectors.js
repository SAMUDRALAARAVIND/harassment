export const getComplaintsForActivePage = (state) => {
  const pageNumber = state.complaints.pagination.activePage ?? 1;
  return state.complaints.data[pageNumber.toString()] ?? [];
};
