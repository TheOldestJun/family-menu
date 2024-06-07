import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { setLogout } from "@/store/reducers/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Login, Confirm } from "../Dialogs";

export default function DesktopNav() {

    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();

    return (
        <nav className="text-secondary-foreground hidden md:block">
            <div className="flex items-center justify-between text-blue-gray-900">
                <div
                    className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                >
                    <Link href="/">Меню на неделю</Link>
                </div>
                {!login.login ? (
                    <div id="login">
                        <Dialog>
                            <DialogTrigger>
                                <div className="text-4xl font-caveat cursor-pointer">
                                    Войти
                                </div>
                            </DialogTrigger>
                            <Login />
                        </Dialog>
                    </div>
                ) : (
                    <div id="logout" className="text-4xl font-caveat">
                        {`Привет, ${login.name}!`}
                    </div>
                )}
                <div
                    className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                >
                    <Link href="/menu/month">Что кушали в прошлом месяце</Link>
                </div>
            </div>
        </nav>
    );
}