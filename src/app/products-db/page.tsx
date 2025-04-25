import { Suspense } from "react";
import { getProducts } from "@/prisma-db";
import { Product } from "@/types";
import Link from "next/link";

const ProductsDb = async () => {
  const products: Product[] = await getProducts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-3xl font-bold mb-8">Products</h1>
          <Link
            href="/products-db-create"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-6 inline-block"
          >
            Create New Product
          </Link>
        </div>
        <Suspense fallback={<div>Loading products...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {products.map((product: Product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold mb-3 text-gray-800">
                  <Link href={`/products-db/${product.id}`}>
                    {product.title}{" "}
                  </Link>
                </h2>
                <p className="text-2xl font-semibold text-blue-600 mb-2">
                  ${product.price}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </Suspense>
      </main>
    </div>
  );
};

export default ProductsDb;
