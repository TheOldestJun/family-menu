"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  useGetAllProductsQuery,
  useAddProductMutation,
} from "@/store/services/products";
import { useState, useEffect } from "react";
import { capitalize } from "@/lib/utils";
import toast from "react-hot-toast";
import ProductSelect from "@/components/ProductSelect";
import { getPageData } from "@/lib/utils";

export default function Page({ params }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
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
  return (
    <div className="flex justify-center">
      <Card className="mt-2 w-[98%]">
        <CardTitle className="text-3xl text-center">TODO: Page Title</CardTitle>
        <Tabs defaultValue="choose" className="mt-2">
          <TabsList className="flex flex-row mx-12">
            <TabsTrigger value="choose" className="text-2xl">
              Выбрать
            </TabsTrigger>
            <TabsTrigger value="create" className="text-2xl">
              Создать
            </TabsTrigger>
          </TabsList>

          <TabsContent value="choose"></TabsContent>
          <TabsContent value="create">
            <CardContent className="flex flex-col space-y-1.5 p-6">
              <Input value="Выберите продукт" className="w-full text-3xl" />
              <ProductSelect
                options={products}
                value={selectedProducts}
                onSelectedOption={setSelectedProducts}
                onCreateOption={(value) => handleCreateProduct(value)}
                isMulti={true}
              />
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
