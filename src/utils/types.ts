//TODO キャメルケースに統一するか考える
export type Tweet = {
  id: string;
  id_str: string;
  text: string;
  includes: Tweet[];
  created_at: string;
};
