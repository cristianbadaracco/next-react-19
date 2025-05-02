import { getProduct, getProducts } from "@/prisma-db";
import { notFound } from "next/navigation";

import EditProductForm from "./_components/product-edit-form";

import { Product } from "@/types";

export async function generateStaticParams() {
  const products: Product[] = await getProducts();
  return products.map((product) => ({ id: product.id.toString() }));
}

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
};

export default ProductDetails;
