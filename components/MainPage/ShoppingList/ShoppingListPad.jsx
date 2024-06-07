import Image from "next/image"
import ShoppingList from "./ShoppingList"

export default function ShoppingListPad({ className }) {
    return (
        <>
            <div className={className}>
                <div className="flex flex-col">
                    <div className="flex relative">
                        <Image
                            src={"/img/shop-list-up.webp"}
                            width={450}
                            height={181}
                            alt="shopping list background image top"
                        />
                        <div className="fixed text-7xl font-caveat text-gray-900 ml-20 mt-2">
                            Список
                        </div>
                        <div className="fixed text-7xl font-caveat text-gray-900 ml-28 mt-16">
                            покупок
                        </div>
                    </div>

                    <ShoppingList />
                    <Image
                        src={"/img/shop-list-down.webp"}
                        width={450}
                        height={248}
                        alt="shopping list background image button"
                    />
                </div>
            </div>
        </>
    )
}