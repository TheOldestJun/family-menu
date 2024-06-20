import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { connect } from "react-redux";

export async function POST(request) {
  const body = await request.json();
  try {
    // Fetch existing product IDs from the ShopList table
    const existingProductIds = await prisma.shopList.findMany({
      select: { productId: true },
    });

    // Create a Set of existing product IDs
    const existingProductIdSet = new Set(
      existingProductIds.map((item) => item.productId)
    );

    // Filter out the new product IDs that already exist in the database
    const uniqueProductIds = body.filter(
      (item) => !existingProductIdSet.has(item.id)
    );

    // Create new ShopList entries with unique product IDs
    const result = await prisma.shopList.createMany({
      data: uniqueProductIds.map((item) => ({ productId: item.id })),
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
