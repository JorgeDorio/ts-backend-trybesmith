import { Request, Response } from 'express';
import * as servicer from '../services/users';

export const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const { status, data } = await servicer.createProduct(username, classe, level, password);
  return res.status(status).json(data);
};

export const a = 'teste';