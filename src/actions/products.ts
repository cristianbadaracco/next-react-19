"use server";

import { redirect } from "next/navigation";

import {
  createProduct as createProductDb,
  updateProduct as updateProductDb,
} from "@/prisma-db";

import type { Error, FormError } from "@/types";

export const createProduct = async (_: FormError, formData: FormData) => {
  const title = formData.get("title");
  const price = formData.get("price");
  const description = formData.get("description");

  const errors: Error = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  await createProductDb(title as string, Number(price), description as string);
  redirect("/products-db");

  return {
    errors: {},
  };
};

export const updateProduct = async (
  id: number,
  _: FormError,
  formData: FormData
) => {
  const title = formData.get("title");
  const price = formData.get("price");
  const description = formData.get("description");

  const errors: Error = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  await updateProductDb(
    Number(id),
    title as string,
    Number(price),
    description as string
  );
  redirect("/products-db");
};
