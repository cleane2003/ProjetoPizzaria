import { AppDataSource } from '../index';
import { Category } from '../entities/Category';

export const categoryRepository = AppDataSource.getRepository(Category);
