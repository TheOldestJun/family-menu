import Image from "next/image"

export default function ShoppingList() {

    return (
        <>
            <div className="flex relative" >
                <Image
                    src={"/img/shop-list-item.webp"}
                    width={450}
                    height={30}
                    alt="shopping list item background"
                />
                <div className="text-3xl font-caveat text-gray-600 fixed ml-16">Shopping list Item one</div>
            </div>
            <div className="flex relative" >
                <Image
                    src={"/img/shop-list-item.webp"}
                    width={450}
                    height={30}
                    alt="shopping list item background"
                />
                <div className="text-3xl font-caveat text-gray-600 fixed ml-16"><del>Shopping list Item two</del></div>
            </div>
        </>
    )
}