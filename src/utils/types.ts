//TODO キャメルケースに統一するか検討する
export type Tweet = {
  id: string;
  id_str: string;
  text: string;
  includes: Tweet[];
  created_at: string;
};
