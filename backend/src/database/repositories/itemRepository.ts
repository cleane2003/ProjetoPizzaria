import { AppDataSource } from '../index';
import { OrderItem } from '../entities/OrderItem';

export const itemRepository = AppDataSource.getRepository(OrderItem);
