import { useGetDishesByCategoryQuery } from "@/store/services/dishes";
import { CardContent } from "../ui/card";
import Image from "next/image";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useAddItemsMutation } from "@/store/services/shoplist";


export default function ChooseDish({ category }) {
    const [addItems] = useAddItemsMutation();
    const { data, isLoading, error } = useGetDishesByCategoryQuery(category.url);
    if (isLoading)
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-3xl text-gray-600"><ReloadIcon className="w-10 h-10 animate-spin" /></div>
            </div>
        );
    if (error) return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-3xl  text-gray-600">{`Ошибка на сервере: ${error.message}`}</div>
        </div>
    );
    console.log(data)
    const addMenuItem = (dishIngredients) => {
        //TODO: add items to shopping list table in DB
        addItems(dishIngredients)
        //TODO: add dishes to menu list table in DB
    }

    const dishes = data?.map((dish) => {
        return (
            <>
                <div
                    className="relative cursor-pointer text-3xl inline-block hover:ring-4 ring-primary rounded-3xl"
                    key={dish.id}
                    onClick={() => addMenuItem(dish.ingredients)}
                >
                    <Image
                        src={dish.img}
                        width={640}
                        height={426}
                        className="rounded-3xl opacity-80 block "
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