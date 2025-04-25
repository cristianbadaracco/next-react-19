import { getProduct } from "@/prisma-db";
import { notFound } from "next/navigation";

import EditProductForm from "./_components/product-edit-form";

import { Product } from "@/types";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  console.log("PRODUCT", product);

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
};

export default ProductDetails;
