import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Category } from './entities/Category';
import { Order } from './entities/Order';
import { OrderItem } from './entities/OrderItem';
import { Product } from './entities/Product';
import { User } from './entities/User';

const port = process.env.DB_PORT as unknown as number | undefined;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Category, Order, Product, OrderItem],
  subscribers: [],
  migrations: [],
});
