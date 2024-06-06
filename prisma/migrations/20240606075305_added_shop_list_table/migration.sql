-- CreateTable
CREATE TABLE "ShopList" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ShopList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShopList" ADD CONSTRAINT "ShopList_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
