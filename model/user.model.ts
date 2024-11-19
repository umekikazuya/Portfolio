export interface User {
  id: string;
  displayName: string | null;
  displayShortName: string | null;
  address: string | null;
  from: string | null;
  github: string | null;
  introduction: string | null;
  job: string | null;
  likes: Array<string>;
  qiita: string | null;
  skills: Array<string>;
  summaryIntroduction: string | null;
  zenn: string | null;
  updatedAt: string;
}
