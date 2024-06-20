"use client";
import MenuPad from "@/components/MainPage/Menu/MenuPad";
import { useEffect } from "react";
import gsap from "gsap";
import ShoppingListPad from "@/components/MainPage/ShoppingList/ShoppingListPad";

export default function MainPage() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".menu-animation",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 0.9,
        duration: 2,
        x: 0,
        ease: "back.out",
      }
    );
    tl.fromTo(
      ".shop-animation",
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 0.9,
        duration: 1,
        x: 0,
        ease: "back.out",
      }
    );
  }, []);
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 container mx-auto gap-6 mt-6">
      <MenuPad className="menu-animation w-full h-full flex items-center justify-center opacity-0" />
      <ShoppingListPad className="shop-animation w-full h-full flex items-center justify-center opacity-0 relative" />
    </div>
  );
}
