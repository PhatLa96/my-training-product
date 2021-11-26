export interface Product {
  categoryId?: string;
  id?: string;
  name: string;
  color: string;
  price: number;
  description: string;
  thumbnailUrl: string;

  createdAt?: number;
  updateAt?: number;
}
