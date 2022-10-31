import { PrismaClient } from '@prisma/client';

/*
Global is used here to maintain a cached connection across hot reloads
in development. This prevents connections growing exponentially.
https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
*/

const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export default prisma;
