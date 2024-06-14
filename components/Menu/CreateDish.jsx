import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import ProductSelect from "../ProductSelect";
import { useGetAllProductsQuery, useAddProductMutation } from "@/store/services/products";
import { useState, useRef } from "react";
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
    const [imageFile, setImageFile] = useState(false);
    const inputFileRef = useRef(null);
    const [blob, setBlob] = useState(null);
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
    if (error) return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-3xl text-gray-600">{`Ошибка на сервере: ${error.message}`}</div>
        </div>
    )
    let products = data?.map((product) => {
        return { value: product.id, label: product.title };
    });
    const handleCreateProduct = (value) => {
        addProduct(capitalize(value));
        toast.success("Продукт успешно создан");
    };

    const handleImgSave = async () => {
        const file = inputFileRef.current.files[0];
        if (!file) {
            toast.error("Файл не выбран");
            return;
        }
        const response = await fetch(
            `/api/dishes/img-upload?filename=${file.name}`,
            {
                method: 'POST',
                body: file,
            },
        );

        const newBlob = (await response.json());
        if (!newBlob) {
            toast.error("Не удалось загрузить изображение");
            return;
        } else {
            toast.success("Изображение загружено");
            setImageFile(true);
        }
        setBlob(newBlob);
    }

    const handleCreateRecipe = async () => {
        try {
            const result = await axios.post("/api/dishes/add", {
                title: capitalize(dishTitle),
                ingredients: selectedProducts,
                instructions,
                category,
                img: blob.url,
            })
            if (result.status === 200) {
                toast.success("Блюдо успешно создано");
                setImageFile(false);
                setDishTitle("");
                setSelectedProducts([]);
                setInstructions("");
                inputFileRef.current.value = null;
                setBlob(null);
            }
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
                <div className="flex w-full items-center space-x-2">
                    <Input
                        id="image"
                        type="file"
                        ref={inputFileRef}
                        className="w-full file:text-3xl cursor-pointer text-2xl" />
                    <Button onClick={handleImgSave} className="text-3xl">Сохранить</Button>
                </div>
                {blob && <div className="text-2xl">{blob.url}</div>}
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
                {imageFile && (
                    <>
                        <br />
                        <Button
                            className="w-full text-3xl"
                            onClick={handleCreateRecipe}>
                            Сохранить
                        </Button>
                    </>

                )}

            </CardContent>
        </>
    )
}