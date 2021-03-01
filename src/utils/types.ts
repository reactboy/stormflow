export type Tweet = {
  id: string;
  id_str: string;
  text: string;
  includes: Tweet[];
};
