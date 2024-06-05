import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function GET() {
  try {
    const result = await prisma.category.findMany();
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
