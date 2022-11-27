import prisma from './prisma-client';

export function createUser(email, fullName, password) {
  return prisma.user.create({
    data: {
      email,
      password,
      fullName,
    },
  });
}

export function getUserByEmail(email) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export function getUserById(id) {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      fullName: true,
    },
  });
}
