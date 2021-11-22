import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import * as Prisma from '@prisma/client';

const prisma = new Prisma.PrismaClient();

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'johndoe@test.com',
        },
        password: {
          label: 'Email',
          type: 'password',
        },
      },
      authorize: (credentials) => {
        // Запрос в БД
        // ...
        // Запрос в БД
        if (
          credentials.email === 'ivanesmantovich@gmail.com' &&
          credentials.password === 'FrozenMemory67'
        ) {
          return {
            id: 1,
            name: 'Ivan',
            email: 'ivanesmantovich@gmail.com',
          };
        }
        // Если совпадения не найдено то возвращается нулл
        // login failed
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      // Хватаю юзера и привязываю его айди к токену
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
  secret: 'test',
  jwt: {
    secret: 'test',
    // @ts-ignore
    encryption: true,
  },
  pages: {
    signIn: '/auth/login',
  },
});
