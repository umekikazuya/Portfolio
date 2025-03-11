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
        {articles.map((article, index) => (
          <>
            <article key={index}>
              <Heading level={3}>{article.title}</Heading>
              <time
                dateTime={article.publishedAt}
                className={style.article_time}
              >
                {article.publishedAt}
              </time>
              <div key={index} className={style.article_border} />
            </article>
          </>
        ))}
      </div>
    </>
  );
};
