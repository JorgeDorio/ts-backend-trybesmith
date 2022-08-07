import jwt from 'jsonwebtoken';
import { IUser } from '../interface/IUser';

const generateToken = (payload: IUser) => {
  const token = jwt.sign(payload, 'batata');
  return token;
};

export default generateToken;
