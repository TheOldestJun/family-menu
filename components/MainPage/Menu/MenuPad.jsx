import Image from "next/image";
import Menu from "./Menu";

export default function MenuPad({ className }) {
    return (
        <>
            <div className={className}>
                <div className="flex w-full h-full justify-center items-start">
                    <Image
                        src="/img/menu-bg.webp"
                        alt="plate background image"
                        width="450"
                        height="640"
                        className="rounded-3xl"
                    />
                    <Menu />
                </div>
            </div>
        </>
    )
}