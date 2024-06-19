import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { connect } from "react-redux";

export async function POST(request) {
  const body = await request.json();
  try {
    //TODO: deduplicate shoplist items
    const result = await prisma.shopList.createMany({
      data: [...body.map((item) => ({ productId: item.id }))],
      skipDuplicates: true,
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
