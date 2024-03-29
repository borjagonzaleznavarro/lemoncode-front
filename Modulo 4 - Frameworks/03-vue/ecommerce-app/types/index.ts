export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductResponse {
  products: Product[]
  limit: number;
  skip: number;
  total: number;
}

export type CartItem = { quantity: number; data: Product }
export type CartItemRecord = Record<number, CartItem>