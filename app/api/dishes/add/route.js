import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const { title, ingredients, instructions, category, img } = body;
  if (!title || !ingredients || !instructions || !category) {
    return NextResponse.json(
      { error: "Чего-то не хватает..." },
      { status: 400 }
    );
  }
  try {
    const result = await prisma.recipe.create({
      data: {
        title,
        ingredients: {
          connect: [...ingredients.map((i) => ({ id: i.value }))],
        },
        instructions,
        category: {
          connect: { id: category.id },
        },
        img,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
