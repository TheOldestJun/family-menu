import { useGetDishesByCategoryQuery } from "@/store/services/dishes";
import { CardContent } from "../ui/card";
import Image from "next/image";


export default function ChooseDish({ category }) {

    const { data, isLoading, error } = useGetDishesByCategoryQuery(category.url);
    if (isLoading)
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-3xl text-gray-600">Загрузка...</div>
            </div>
        );
    if (error) return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-3xl  text-gray-600">{`Ошибка на сервере: ${error.message}`}</div>
        </div>
    );
    console.log(data);
    const dishes = data?.map((dish) => {
        return (
            <>
                <div
                    className="relative cursor-pointer py-1.5 text-3xl inline-block"
                    key={dish.id}
                >
                    <Image
                        src={dish.img}
                        width={640}
                        height={426}
                        className="rounded-3xl opacity-80 block"
                        alt="dish image"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-7xl text-gray-800 text-center">
                        <p>{dish.title}</p>
                    </div>

                </div>

            </>

        );
    });
    return (
        <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">{dishes}</div>
        </CardContent>

    );
}