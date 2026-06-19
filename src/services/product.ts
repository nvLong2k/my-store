import { api } from "../lib/axios";


export type Product = {
  id: number;
  name: string;
  price: number;
};

export const productService = {
  getAll: () => api.get<Product[]>("/products"),
  getById: (id: number) => api.get<Product>(`/products/${id}`),
  create: (data: Omit<Product, "id">) => api.post<Product>("/products", data),
  update: (id: number, data: Partial<Product>) => api.put<Product>(`/products/${id}`, data),
  partialUpdate: (id: number, data: Partial<Product>) => api.patch<Product>(`/products/${id}`, data),
  remove: (id: number) => api.delete<void>(`/products/${id}`),
};