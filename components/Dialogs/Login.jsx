import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { setLogin } from "@/store/reducers/loginSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/user/check", {
                name,
                password,
            });
            if (response.data.message === "success") {
                dispatch(setLogin(name));
                toast.success("Вход выполнен.");
            }
        } catch (error) {
            if (error.issues) {
                toast.error(error.issues[0].message);
            } else {
                toast.error(error.response.data.error);
            }
        }
    };
    return (
        <>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        <div className="text-3xl text-center">Вход</div>
                    </DialogTitle>
                    <DialogDescription>
                        <div className="text-2xl text-center">
                            Для внесения изменений требуется вход.
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right text-2xl">
                            Имя
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            className="col-span-3 text-2xl"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right text-2xl">
                            Пароль
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="col-span-3 text-2xl"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild  >
                        <Button className="text-2xl w-full" onClick={onSubmit}>
                            Войти
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </>
    );
}
