export interface FeedElement {
  title: string;
  link: string;
  published: string;
}

export interface Feed {
  title: string;
  link: string;
  data: FeedElement[];
}
