import prisma from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  const body = await request.json();
  const { name, password, isAdmin } = body;
  if (!name || !password)
    return NextResponse.json(
      { error: "Не указано имя или пароль" },
      { status: 400 }
    );
  try {
    const user = await prisma.user.findUnique({
      where: {
        name,
      },
    });

    if (user) {
      return NextResponse.json(
        { error: "Пользователь с таким именем уже существует" },
        { status: 400 }
      );
    }
    const result = await prisma.user.create({
      data: {
        name,
        password: bcrypt.hashSync(password, 10),
        isAdmin,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
