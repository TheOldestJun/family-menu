import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export default function DesktopNav() {
    const [showLoginForm, setShowLoginForm] = useState(false); // show or hide login form
    return (
        <nav className="text-secondary-foreground hidden md:block">
            <div className="flex items-center justify-between text-blue-gray-900">
                <div
                    className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                >
                    <Link href="/">Меню на неделю</Link>
                </div>
                <div className="text-4xl font-caveat cursor-pointer" onClick={() => setShowLoginForm(!showLoginForm)}>
                    {showLoginForm ? "Не входить" : "Войти"}
                </div>
                <div
                    className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                >
                    <Link href="/menu/month">Что кушали в прошлом месяце</Link>
                </div>
            </div>
        </nav>
    );
}