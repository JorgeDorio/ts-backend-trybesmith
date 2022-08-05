import connection from './connection';
import { IUser } from '../interface/IUser';

export const createUser = async (
  username: string,
  classe: string,
  level: number,
  password: string,
): Promise<IUser[]> => {
  const insert = 'INSERT INTO  Trybesmith.Users (username, classe, `level`, password) VALUES(?, ?, ?, ?)';
  const [result] = await connection.execute(insert, [
    username,
    classe,
    level,
    password,
  ]);
  return result as IUser[];
};

export const listLastUser = async (): Promise<IUser[]> => {
  const query = 'SELECT * FROM Trybesmith.Users ORDER BY id DESC LIMIT 1 ';
  const [result] = await connection.execute(query);
  return result as IUser[];
};

export const a = 'bvjhhuj';
