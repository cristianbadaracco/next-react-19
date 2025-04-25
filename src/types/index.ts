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
