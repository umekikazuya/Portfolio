export const createSearchQuery = (
  serviceId: number | null,
  keyword: string
): SearchQuery => {
  const query: SearchQuery = {};
  if (serviceId !== null) query.serviceId = serviceId;
  if (keyword) query.keyword = keyword;
  return query;
};
