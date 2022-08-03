import { Request, Response } from 'express';
import * as servicer from '../services/products';
import { IProduct } from '../interface/IProduct';

export const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body as IProduct;
  const { status, data } = await servicer.createProduct(name, amount);
  return res.status(status).json(data);
};

export const listAllProducts = async (_req: Request, res: Response) => {
  const { status, data } = await servicer.listAllProducts();
  return res.status(status).json(data);
};
