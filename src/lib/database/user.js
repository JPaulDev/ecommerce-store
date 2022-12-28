import prisma from './prisma-client';

export async function signUpUser(email, fullName, hashedPassword) {
  return prisma.user.create({
    data: {
      email,
      fullName,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
      fullName: true,
    },
  });
}

export function findUserById(id) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export function findSanitizedUserById(id) {
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

export function updateUserPassword(id, hashedPassword) {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      password: hashedPassword,
    },
  });
}

export function updateUserDetails(id, email, fullName) {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      fullName,
    },
    select: {
      id: true,
      email: true,
      fullName: true,
    },
  });
}
