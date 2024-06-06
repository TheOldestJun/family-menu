import prisma from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  const body = await request.json();
  const { name, password } = body;
  if (!name || !password) {
    return NextResponse.json(
      { error: "Не указано имя или пароль" },
      { status: 400 }
    );
  }
  try {
    const result = await prisma.user.findUnique({
      where: {
        name,
      },
    });
    // check if user exists
    if (!result) {
      return NextResponse.json(
        { error: "Такого пользователя не существует" },
        { status: 400 }
      );
    }
    // check password
    const passwordMatch = await bcrypt.compare(password, result.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Неверный пароль" }, { status: 400 });
    }
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
