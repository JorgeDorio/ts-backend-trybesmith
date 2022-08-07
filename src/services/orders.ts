import model from '../models/orders';
import { OK } from '../HTTP_STATUS';

const listAllOrders = async () => {
  const data = await model();
  const clonee = data.map((order) => {
    const clone = order;
    const array = order.productsIds.split(',');
    const numbers = array.map((value: string | number) => Number(value));
    clone.productsIds = numbers;
    return clone;
  });
  return { status: OK, data: clonee };
};

export default listAllOrders;
