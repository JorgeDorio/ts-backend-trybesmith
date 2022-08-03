import { Request, Response } from 'express';
import * as servicer from '../services/products';
import { IProduct } from '../interface/IProduct';

export const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body as IProduct;
  const { status, data } = await servicer.createProduct(name, amount);
  res.status(status).json(data);
};

export const listAllProducts = () => {
  console.log('Só pra manter o export :)');
};
