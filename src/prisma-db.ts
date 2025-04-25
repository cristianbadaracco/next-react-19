import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { id: 1, title: "Product 1", price: 100, description: "Description 1" },
        { id: 2, title: "Product 2", price: 200, description: "Description 2" },
        { id: 3, title: "Product 3", price: 300, description: "Description 3" },
        { id: 4, title: "Product 4", price: 400, description: "Description 4" },
        { id: 5, title: "Product 5", price: 500, description: "Description 5" },
        { id: 6, title: "Product 6", price: 600, description: "Description 6" },
        { id: 7, title: "Product 7", price: 700, description: "Description 7" },
        { id: 8, title: "Product 8", price: 800, description: "Description 8" },
      ],
    });
  }
};

seedProducts();

export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await prisma.product.findMany();
}

export async function getProduct(id: number) {
  if (isNaN(id)) {
    throw new Error("Invalid product ID");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await prisma.product.findUnique({ where: { id } });
}

export async function createProduct(
  title: string,
  price: number,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await prisma.product.create({ data: { title, price, description } });
}

export async function updateProduct(
  id: number,
  title: string,
  price: number,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await prisma.product.update({
    where: { id },
    data: { title, price, description },
  });
}

export async function deleteProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await prisma.product.delete({ where: { id } });
}
