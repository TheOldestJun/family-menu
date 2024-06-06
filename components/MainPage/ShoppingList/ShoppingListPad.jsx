import Image from "next/image"
import ShoppingList from "./ShoppingList"

export default function ShoppingListPad({ className }) {
    return (
        <>
            <div className={className}>
                <Image
                    src="/img/shop-list-bg.webp"
                    alt="plate background image"
                    width="450"
                    height="640"
                    className="rounded-3xl"
                />
                <ShoppingList />
            </div>
        </>
    )
}