import Image from "next/image"
import { useGetShopListQuery, useUpdateItemsMutation } from "@/store/services/shoplist"

export default function ShoppingList() {
    const [updateItems] = useUpdateItemsMutation()
    const { data, isLoading, error } = useGetShopListQuery()

    if (isLoading) return (
        <div className="fixed top-[20%]">
            <div className="text-5xl font-caveat text-gray-400">Загрузка...</div>
        </div>
    )
    if (error) return (
        <div className="fixed top-[20%]">
            <div className="text-5xl font-caveat text-gray-400">{`Ошибка на сервере: ${error.message}`}</div>
        </div>
    )
    const shopList = data?.map((item) => {
        const handleClick = () => {
            updateItems(item.id)
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
                    <div className={`unselectable text-lg md:text-xl lg:text-3xl font-caveat text-gray-600 ml-20 cursor-pointer ${item.done ? 'line-through' : ''}`}>
                        {item.product.title}
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