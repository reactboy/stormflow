export type Tweet = {
  id: string;
  idStr: string;
  text: string;
  includes: Tweet[];
  createdAt: string;
};
