import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import cookie from 'cookie-signature';
import nextSession from 'next-session';
import prisma from '../lib/database/prisma-client';

const secret = process.env.SESSION_SECRET;

const store = new PrismaSessionStore(prisma, {
  checkPeriod: 5 * 60 * 1000, // 5 minutes
  ttl: 2 * 7 * 24 * 60 * 60 * 1000, // 14 days
  dbRecordIdIsSessionId: true,
  dbRecordIdFunction: undefined,
});

const getSession = nextSession({
  name: 'connect.sid',
  store,
  encode: (sid) => (sid ? `s:${cookie.sign(sid, secret)}` : null),
  decode: (raw) => cookie.unsign(raw.slice(2), secret),
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 2 * 7 * 24 * 60 * 60, // 14 days
    sameSite: 'strict',
  },
  touchAfter: 1 * 7 * 24 * 60 * 60, // 7 days
});

export default async function session(req, res, next) {
  await getSession(req, res);
  return next();
}
