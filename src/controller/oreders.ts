import { Request, Response } from 'express';
import servicer from '../services/orders';

const listAllOrders = async (_req: Request, res: Response) => {
  const { status, data } = await servicer();
  return res.status(status).json(data);
};

export default listAllOrders;
