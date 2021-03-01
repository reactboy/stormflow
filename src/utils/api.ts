import axios from 'axios';

export const fetcher = (path: string) => async () => {
  const { data } = await axios.get(path);
  return data;
};

export const mutator = (path: string) => async (variables: any = {}) => {
  const { data } = await axios.post(path, { ...variables });
  return data;
};
