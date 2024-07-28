export interface Article {
  type: string;
  id: string;
  attributes: ArticleAttributes;
}

interface ArticleAttributes {
  title: string;
  field_link: {
    uri: string;
    title: string;
  };
  field_created: string;
}
