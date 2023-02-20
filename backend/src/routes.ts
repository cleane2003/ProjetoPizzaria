import { Router } from 'express';
import multer from 'multer';

import { isAuth } from './middlewares/isAuth';
import uploadConfig from './config/multer';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';

import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { DeleteOrderController } from './controllers/order/DeleteOrderController';

const upload = multer(uploadConfig.upload('./img'));

// import { UpdateUserController } from './controllers/user/UpdateUserController';

const router = Router();

// usuarios
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuth, new DetailUserController().handle);

// categorias
router.post('/category', isAuth, new CreateCategoryController().handle);
router.get('/category', isAuth, new ListCategoryController().handle);

// produtos
router.post(
  '/product',
  isAuth,
  upload.single('file'),
  new CreateProductController().handle,
);
// router.put('/users/:id', new UpdateUserController().update);

// order -> abrir pedido de mesa
router.post('/order', isAuth, new CreateOrderController().handle);
router.delete('/order/:id', isAuth, new DeleteOrderController().handle);

export { router };
