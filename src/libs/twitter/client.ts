// import Twitter from 'twitter-v2';
import Twitter from 'twitter-lite';

export const getTwitterClient = async (accessToken: string, refreshToken: string) => {
  return new Twitter({
    consumer_key: process.env.TWITTER_CLIENT_ID,
    consumer_secret: process.env.TWITTER_CLIENT_SECRET,
    access_token_key: accessToken,
    access_token_secret: refreshToken,
  });
};
