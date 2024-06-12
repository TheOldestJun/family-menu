import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");
  try {
    const result = await prisma.category.findUnique({
      where: {
        url: url,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
