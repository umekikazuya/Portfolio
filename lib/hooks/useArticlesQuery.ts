import { Article } from "@/domain/entities/article";
import { fetchData } from "@/utils/api";
import { useEffect, useState } from "react";

export const useArticlesQuery = (query: SearchQuery) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (query.serviceId) params.append("service_id", String(query.serviceId));
    if (query.keyword) params.append("keyword", query.keyword);
    const controller = new AbortController();
    fetchData<Article[]>(`/api/articles/search?${params}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!controller.signal.aborted && res) {
          setArticles(res);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (!controller.signal.aborted) {
          console.error("記事の取得中にエラーが発生しました:", error);
          setLoading(false);
        }
      });
    return () => {
      controller.abort();
    };
  }, [query]);

  return { articles, loading };
};
