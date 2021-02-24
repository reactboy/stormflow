import axios from 'axios';

export const fetcher = (path: string) => async () => {
  const { data } = await axios.get(path);
  return data;
};
