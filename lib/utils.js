import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "@/prisma";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function capitalize(str) {
  return (str && str[0].toUpperCase() + str.slice(1)) || "";
}
