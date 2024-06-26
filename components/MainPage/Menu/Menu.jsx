import { useGetCategoriesQuery } from "@/store/services/categories"
import Link from "next/link"

export default function Menu() {
    const { data, isLoading, error } = useGetCategoriesQuery()
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
    const categories = data.map(category => {
        return (
            <div
                className={` cursor-pointer py-1.5 text-4xl sm:text-4xl md:text-5xl text-gray-400`}
                key={category.id}
            >
                <Link href={`/menu/${category.url}`}>{category.title}</Link>
            </div>
        )
    })
    return (
        <div className="absolute flex flex-col justify-center items-start top-[20%]">
            {categories}
        </div>
    )
}