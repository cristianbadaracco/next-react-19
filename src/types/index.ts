export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string | null;
}

export interface FormError {
  errors?: Error;
}

export interface Error {
  title?: string;
  price?: string;
  description?: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface FormRoleError {
  errors?: Role;
}

export interface Role {
  id: number;
  role: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
}
