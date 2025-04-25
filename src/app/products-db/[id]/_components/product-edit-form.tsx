"use client";

import { useActionState } from "react";

import { updateProduct } from "@/actions/products";

import ProductForm from "@/components/product-form";

import type { FormError, Product } from "@/types";

const EditProductForm = ({ product }: { product: Product }) => {
  const initialState: FormError = {
    errors: {},
  };

  const updateProductWithId = updateProduct.bind(null, product.id);

  const [state, formAction] = useActionState(updateProductWithId, initialState);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Product Details</h1>
        <ProductForm product={product} action={formAction} state={state} />
      </main>
    </div>
  );
};

export default EditProductForm;
