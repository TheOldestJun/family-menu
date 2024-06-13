import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import ProductSelect from "../ProductSelect";
import { useGetAllProductsQuery, useAddProductMutation } from "@/store/services/products";
import { useState } from "react";
import { capitalize } from "@/lib/utils";
import toast from "react-hot-toast";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea"

export default function CreateDish({ category }) {
    const [selectedProducts, setSelectedProducts] = useState([]);
    console.log(selectedProducts);
    const [dishTitle, setDishTitle] = useState("");
    const [imageFile, setImageFile] = useState("");
    console.log(imageFile);
    const [instructions, setInstructions] = useState("");
    const [addProduct] = useAddProductMutation();
    const { data, error, isLoading } = useGetAllProductsQuery({
        refetchOnMountOrArgChange: true,
    });
    if (isLoading)
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-3xl text-gray-600">Загрузка...</div>
            </div>
        );
    if (error) return <h1>Error</h1>;
    let products = data?.map((product) => {
        return { value: product.id, label: product.title };
    });
    const handleCreateProduct = (value) => {
        addProduct(capitalize(value));
        toast.success("Продукт успешно создан");
    };

    const handleCreateRecipe = async () => {
        try {
            const result = await axios.post("/api/dishes/add", {
                title: capitalize(dishTitle),
                ingredients: selectedProducts,
                instructions,
                category,
                img: imageFile,
            })
            if (result.status === 200)
                toast.success("Блюдо успешно создано");
        } catch (error) {
            if (error.issues) {
                toast.error(error.issues[0].message);
            } else {
                toast.error(error.response.data.error);
            }
        }
    };

    return (
        <>
            <CardContent className="flex flex-col space-y-1.5 p-6">
                <Label htmlFor="title" className="text-2xl">Название блюда</Label>
                <Input
                    id="title"
                    value={dishTitle}
                    onChange={(e) => setDishTitle(e.target.value)}
                    className="w-full text-3xl" />
                <Label htmlFor="image" className="text-2xl">Изображение блюда</Label>
                <Input
                    id="image"
                    type="file"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className="w-full file:text-3xl cursor-pointer text-2xl" />
                <Label htmlFor="products" className="text-2xl">Ингредиенты</Label>
                <ProductSelect
                    id="products"
                    options={products}
                    value={selectedProducts}
                    onSelectedOption={setSelectedProducts}
                    onCreateOption={(value) => handleCreateProduct(value)}
                    isMulti={true}
                />
                <Label htmlFor="instructions" className="text-2xl">Рецепт приготовления</Label>
                <Textarea
                    id="instructions"
                    className="w-full text-xl"
                    placeholder="..."
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
                <br />
                <Button
                    className="w-full text-3xl"
                    onClick={handleCreateRecipe}>
                    Сохранить
                </Button>
            </CardContent>
        </>
    )
}