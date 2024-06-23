export interface User {
  data: {
    attributes: {
      field_address: string | null;
      field_display_name: string | null;
      field_display_short_name: string | null;
      field_from: string | null;
      field_github: string | null;
      field_introduction: string | null;
      field_job: string | null;
      field_like: Array<string>;
      field_qiita: string | null;
      field_skill: Array<string>;
      field_summary_introduction: string | null;
      field_zenn: string | null;
    };
  };
}
