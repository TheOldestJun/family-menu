import Image from "next/image";
import Menu from "./Menu";

export default function MenuPad({ className }) {
    return (
        <>
            <div className={className}>
                <Image
                    src="/img/menu-bg.webp"
                    alt="plate background image"
                    width="450"
                    height="640"
                    className="rounded-3xl"
                />
                <Menu />
            </div>
        </>


    )
}