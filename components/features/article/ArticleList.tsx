import Heading from "@/components/ui/heading/heading";
import MoreLink from "@/components/ui/moreLink/moreLink";
import style from "./feature_article.module.css";
import { Article } from "@/domain/entities/article";

type ArticleListProps = {
  articles: Article[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <>
      <div className={style.heading}>
        <Heading level={2}>ARTICLES</Heading>
        <MoreLink href="/">View all</MoreLink>
      </div>
      <div className={style.articles}>
        {articles.map((article) => (
          <article key={article.id}>
            <Heading level={3}>{article.title}</Heading>
            <time
              dateTime={article.publishedAt.toISOString().split('T')[0]}
              className={style.article_time}
            >
              {article.publishedAt.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <div key={article.id} className={style.article_border} />
          </article>
        ))}
      </div>
    </>
  );
};
