export interface User {
  id: string;
  display_name: string | null;
  display_short_name: string | null;
  address: string | null;
  from: string | null;
  github: string | null;
  introduction: string | null;
  job: string | null;
  likes: string[] | null;
  qiita: string | null;
  skills: string[] | null;
  summaryIntroduction: string | null;
  zenn: string | null;
  updatedAt: string;
}
