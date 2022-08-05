import { Router } from 'express';
import * as products from '../controller/products';
import * as users from '../controller/users'

const router = Router();

router.get('/products', products.listAllProducts);
router.post('/products', products.createProduct);
router.post('/users', users.createUser)

export default router;
