import { AppDataSource } from '../index';
import { Product } from '../entities/Product';

export const productRepository = AppDataSource.getRepository(Product);
