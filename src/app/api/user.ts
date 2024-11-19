import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

interface GetUserParams {
  userId: number;
}

export async function getUser({ userId }: GetUserParams) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
}
