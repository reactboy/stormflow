export type Tweet = {
  id: string;
  text: string;
  includes: Tweet[];
};
