export interface FeedElement {
  title: string;
  link: string;
  published: string;
  service: {
    name: string;
    link: string;
  };
}

export interface Feed {
  title: string;
  link: string;
  data: FeedElement[];
}
