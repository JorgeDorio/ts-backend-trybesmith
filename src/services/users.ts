import * as users from '../models/users';
import { CREATED } from '../HTTP_STATUS';
import generateToken from '../middleware/tokenGenerator';

export const createProduct = async (
  username: string,
  classe: string,
  level: number,
  password: string,
) => {
  await users.createUser(username, classe, level, password);
  const token = generateToken({
    username, classe, level, password,
  });
  return { status: CREATED, data: { token } };
};

export const a = 'jhkjh';
