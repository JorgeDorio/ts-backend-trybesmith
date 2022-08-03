import * as products from '../models/products';
import { CREATED, OK } from '../HTTP_STATUS';

export const createProduct = async (name: string, amount: string) => {
  await products.createProduct(name, amount, 3);
  const [data] = await products.listLastProduct();
  return { status: CREATED, data };
};

export const listAllProducts = async () => {
  const data = await products.listAllProducts();
  return { status: OK, data };
};
