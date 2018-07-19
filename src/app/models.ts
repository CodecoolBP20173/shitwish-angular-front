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
   products: LineItem[];
}

export interface LineItem {
    id: number;
    amount: number;
}

export interface Order {
  id: number;
  userId: string;
  address: Address;
  products: Product[];
}

export interface User {
  id: string;
  productId: number[];
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  picture: string;
}

export interface Address {
    zipcode: string;
    country: string,
    city: string;
    street: string;
}
