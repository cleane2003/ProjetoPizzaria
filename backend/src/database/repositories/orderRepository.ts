import { AppDataSource } from '../index';
import { Order } from '../entities/Order';

export const orderRepository = AppDataSource.getRepository(Order);
