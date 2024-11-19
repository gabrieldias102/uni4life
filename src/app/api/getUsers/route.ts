import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        name: true,
      },
      take: 3,
    });
    const userNames = users.map((user) => user.name);

    return NextResponse.json(userNames);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
