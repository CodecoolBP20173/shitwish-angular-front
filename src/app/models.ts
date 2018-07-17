export interface Product {
  id: number;
  userId: string;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  price: number;
}

export interface Cart {
   id: number;
   userId: string;
   products: Product[];
}

export interface Order {
  id: number;
  userId: string;
  products: Product[];
}

export interface User {
  id: string;
  productId: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
}
