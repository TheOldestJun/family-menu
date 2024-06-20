import prisma from "@/prisma";
import { NextResponse } from "next/server";
import moment from "moment";

export async function GET() {
  const lastDate = moment().subtract(3, "days");
  try {
    await prisma.shopList.deleteMany({
      where: {
        AND: [{ createdAt: { lt: lastDate } }, { done: true }],
      },
    });
    const result = await prisma.shopList.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        product: {
          select: {
            title: true,
          },
        },
        done: true,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
