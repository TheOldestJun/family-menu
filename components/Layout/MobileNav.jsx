import { useState } from "react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image";
import { Login } from "../Dialogs";
import { useSelector } from "react-redux";


export default function MobileNav() {
    const login = useSelector((state) => state.login);
    return (
        <>
            <div className="md:hidden flex justify-end">
                <Dialog>
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Image src={"/icons/menu-bar.webp"} width={30} height={30} alt={"menu"} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[65vw] opacity-80 md:hidden mr-5">
                            <DropdownMenuItem>
                                <div
                                    className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                                >
                                    <Link href="/">Меню на неделю</Link>
                                </div>
                            </DropdownMenuItem>
                            {!login.login ? (
                                <DialogTrigger asChild>
                                    <DropdownMenuItem>
                                        <div className="text-4xl font-caveat">
                                            Войти
                                        </div>
                                    </DropdownMenuItem>
                                </DialogTrigger>
                            ) : (
                                <DropdownMenuItem>
                                    <div
                                        className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                                    >
                                        {`Привет, ${login.name}!`}
                                    </div>
                                </DropdownMenuItem>
                            )
                            }

                            <DropdownMenuItem>
                                <div
                                    className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                                >
                                    <Link href="/menu/month">Что кушали в прошлом месяце</Link>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Login />
                </Dialog>
            </div>
        </>

    )
}