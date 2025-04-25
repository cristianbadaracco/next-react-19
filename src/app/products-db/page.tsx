import { getProducts } from "@/prisma-db";

import { Product } from "@/types";

import ProductList from "./product-list";

const ProductsDb = async () => {
  const products: Product[] = await getProducts();

  return <ProductList products={products} />;
};

export default ProductsDb;
