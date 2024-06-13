"use client";
import { Card, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateDish } from "@/components/Menu";
import { useGetCategoryQuery } from "@/store/services/categories";

export default function Page({ params }) {
  const { data, error, isLoading } = useGetCategoryQuery(params.category);
  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-3xl text-gray-600">Загрузка...</div>
      </div>
    );
  if (error) return <h1>Error</h1>;
  return (
    <div className="flex justify-center">
      <Card className="mt-2 w-[98%]">
        <CardTitle className="text-5xl text-center text-primary">
          {data.title}
        </CardTitle>
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
            <CreateDish category={data} />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
