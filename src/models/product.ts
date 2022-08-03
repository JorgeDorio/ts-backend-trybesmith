import connection from './connection';
import { IProduct } from '../interface/IProduct';

export const createProduct = async (name: string, amount: string, orderId: number):
Promise<IProduct[]> => {
  const insert = 'INSERT INTO  Trybesmith.Products (name, amount, orderId) VALUES(?, ?, ?)';
  const [result] = await connection.execute(insert, [name, amount, orderId]);
  return result as IProduct[];
};

export const listLastProduct = async (): Promise<IProduct[]> => {
  const query = 'SELECT id, name, amount FROM Trybesmith.Products ORDER BY id DESC LIMIT 1 ';
  const [result] = await connection.execute(query);
  return result as IProduct[];
};

// export const listAllProducts = async (): Promise<IProduct[]> => {
//   const query = 'SELECT * FROM Trybesmith.Products';
//   const [products] = await connection.execute(query);
//   return products as IProduct[];
// }
