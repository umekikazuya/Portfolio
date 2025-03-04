import Heading from "@/components/ui/heading/heading";
import MoreLink from "@/components/ui/moreLink/moreLink";
import { Article } from "@/model/article.model";
import style from "./feature_article.module.css";

type Props = {
  articles: Article[];
};

const FeatureArticle: React.FC<Props> = ({ articles }) => {
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
              <time dateTime={article.published} className={style.article_time}>
                {article.published}
              </time>
              <div key={index} className={style.article_border} />
            </article>
          </>
        ))}
      </div>
    </>
  );
};

export default FeatureArticle;
