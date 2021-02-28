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
  pages: {
    signIn: '/signin',
  },
  callbacks: {
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
