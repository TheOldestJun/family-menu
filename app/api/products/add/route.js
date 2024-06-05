import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  try {
    const result = await prisma.product.create({
      data: {
        title: body.title,
      },
    });
    if (result) return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
