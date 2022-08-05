import * as users from '../models/users';
import { CREATED } from '../HTTP_STATUS';

export const createProduct = async (
  username: string,
  classe: string,
  level: number,
  password: string,
) => {
  await users.createUser(username, classe, level, password);
  const token = 'KKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  return { status: CREATED, data: { token } };
};

export const a = 'jhkjh';