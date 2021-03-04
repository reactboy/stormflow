import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { dbConnect } from '@utils/mongodb';
import { User } from '@utils/mongodb/models';

//TODO ts-ignoreを無くす
//@ts-ignore
export default NextAuth({
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    signIn: async (_user, _account, profile) => {
      await dbConnect();
      const filter = { userId: profile.id };
      const update = { userId: profile.id, email: profile.email };
      //TODO ts-ignore消す
      //@ts-ignore
      await User.findOneAndUpdate(filter, update, { upsert: true });
      return true;
    },
    session: async (session, token) => {
      return {
        ...session,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        uid: token.sub,
      };
    },
    jwt: async (token, _user, account, _profile, _isNewUser) => {
      if (!token.accessToken) token.accessToken = account.accessToken;
      if (!token.refreshToken) token.refreshToken = account.refreshToken;
      return token;
    },
  },
});
