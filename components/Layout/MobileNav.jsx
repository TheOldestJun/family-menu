import { useState } from "react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";


export default function MobileNav({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="md:hidden flex justify-end">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Image src={"/icons/menu-bar.webp"} width={30} height={30} alt={"menu"} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[65vw] opacity-80 md:hidden">
                        <DropdownMenuItem>
                            <div
                                className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                            >
                                <Link href="/">Меню на неделю</Link>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <div className="text-4xl font-caveat" onClick={() => setShowLoginForm(!showLoginForm)}>
                                Войти
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <div
                                className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                            >
                                <Link href="/menu/month">Что кушали в прошлом месяце</Link>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </>

    )
}