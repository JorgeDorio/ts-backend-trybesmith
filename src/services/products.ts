import * as products from '../models/product';
import { CREATED } from '../HTTP_STATUS';

export const createProduct = async (name: string, amount: string) => {
  await products.createProduct(name, amount, 3);
  const [data] = await products.listLastProduct();
  return { status: CREATED, data };
};

export const listAllProducts = () => {
  console.log('Só pra manter o export :)');
};
