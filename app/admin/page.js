"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  useGetAllProductsQuery,
  useAddProductMutation,
} from "@/store/services/products";
import { useState } from "react";

import { capitalize } from "@/lib/utils";
import toast from "react-hot-toast";

import ProductSelect from "@/components/ProductSelect";

export default function Page() {
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
    <>
      <Tabs className="mt-2">
        <TabsList className="w-full">
          <TabsTrigger value="dishes">
            <div className="text-2xl">Создать блюдо</div>
          </TabsTrigger>
          <TabsTrigger value="users">
            <div className="text-2xl">Создать пользователя</div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="dishes">
          <Card>
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
          </Card>
        </TabsContent>
        <TabsContent value="users">Make new user tab</TabsContent>
      </Tabs>
    </>
  );
}
