import { Article } from "@/domain/entities/article";
import { fetchData } from "@/utils/api";
import { useEffect, useState } from "react";

export const useArticlesQuery = (query: SearchQuery) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query.serviceId) params.append("service_id", String(query.serviceId));
    if (query.keyword) params.append("keyword", query.keyword);

    setLoading(true);
    fetchData<Article[]>(`/api/articles/search?${params}`).then((res) => {
      if (res) setArticles(res);
      setLoading(false);
    });
  }, [query]);

  return { articles, loading };
};
