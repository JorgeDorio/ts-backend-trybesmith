import connection from './connection';
import { IOrders } from '../interface/IOrders';

const listAllOrders = async (): Promise<IOrders[]> => {
  const string = [
    'SELECT Orders.id, Orders.userId, GROUP_CONCAT(Products.id) AS productsIds',
    'FROM Trybesmith.Orders',
    'INNER JOIN Trybesmith.Products',
    'ON Orders.id = Products.orderId',
    'GROUP BY Orders.id',
    'ORDER BY Orders.userId ASC',
  ];
  const query = string.reduce((ant, post) => `${ant} ${post}`);
  const [result] = await connection.execute(query);
  return result as IOrders[];
};

export default listAllOrders;
