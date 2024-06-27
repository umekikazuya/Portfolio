export interface FeedElement {
  title: string;
  link: string;
  published: string;
}

export interface Feed {
  title: string;
  url: string;
  data: FeedElement[];
}
