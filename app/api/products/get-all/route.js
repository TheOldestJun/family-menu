import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await prisma.product.findMany();
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
