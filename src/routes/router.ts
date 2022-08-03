import { Router } from 'express';
import * as controllers from '../controller/products';

const router = Router();

router.get('/products', controllers.listAllProducts);
router.post('/products', controllers.createProduct);

export default router;
