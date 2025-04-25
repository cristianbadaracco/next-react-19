"use client";

import { useActionState } from "react";

import { createProduct } from "@/actions/products";

import ProductForm from "@/components/product-form";

const AddProduct = () => {
  const [state, createProductAction] = useActionState(createProduct, {
    errors: {},
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold mb-8">Create New Product</h1>
        <ProductForm action={createProductAction} state={state} />
      </main>
    </div>
  );
};

export default AddProduct;
