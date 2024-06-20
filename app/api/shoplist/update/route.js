import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = parseInt(searchParams.get("id"));
  try {
    const isCurrentlyDone = await prisma.shopList.findUnique({
      where: {
        id: id,
      },
      select: {
        done: true,
      },
    });
    const result = await prisma.shopList.update({
      where: {
        id: id,
      },
      data: {
        done: !isCurrentlyDone.done,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
