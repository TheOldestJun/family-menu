import Image from "next/image"
import { useState } from "react"

let mockData = [
    { id: 1, product: "Potatoes", done: false },
    { id: 2, product: "Tomatoes", done: true },
    { id: 3, product: "Carrots", done: false },
    { id: 4, product: "Cucumbers", done: true },
    { id: 5, product: "Onions", done: false },
    { id: 6, product: "Cabbage", done: true },
    { id: 7, product: "Broccoli", done: false },
    { id: 8, product: "Eggplant", done: true },
    { id: 9, product: "Spinach", done: false },
    { id: 10, product: "Cauliflower", done: true },
]

export default function ShoppingList() {

    const shopList = mockData.map((item) => {
        const [done, setDone] = useState(item.done)
        const handleClick = () => {
            setDone(!done)
        }
        return (
            <div className="flex relative" key={item.id}>
                <Image
                    src={"/img/shop-list-item.webp"}
                    width={450}
                    height={30}
                    alt="shopping list item background"
                />
                <div className="fixed" onClick={handleClick}>
                    <div className={`text-3xl font-caveat text-gray-600 ml-20 cursor-pointer ${done ? 'line-through' : ''}`}>
                        {item.product}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            {shopList}
        </>
    )
}