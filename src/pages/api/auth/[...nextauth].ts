import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

//TODO ts-ignoreを無くす
//@ts-ignore
export default NextAuth({
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  // database: process.env.DATABASE_URL,
});
