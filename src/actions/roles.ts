"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { FormError } from "@/types";

import { ROLES } from "@/constants";

export const setRole = async (_: FormError, formData: FormData) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== ROLES.ADMIN.toUpperCase()) {
    throw new Error("You are not an admin");
  }

  const client = await clerkClient();
  const id = formData.get("id") as string;
  const role = formData.get("role") as string;

  try {
    await client.users.updateUser(id, { publicMetadata: { role } });
    revalidatePath("/admin");
    return {
      errors: {},
    };
  } catch (error) {
    throw new Error(error as string);
  }
};

export const deleteRole = async (_: FormError, formData: FormData) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== ROLES.ADMIN.toUpperCase()) {
    throw new Error("You are not an admin");
  }

  const client = await clerkClient();
  const id = formData.get("id") as string;

  try {
    await client.users.updateUser(id, { publicMetadata: { role: null } });
    revalidatePath("/admin");
    return {
      errors: {},
    };
  } catch (error) {
    throw new Error(error as string);
  }
};
