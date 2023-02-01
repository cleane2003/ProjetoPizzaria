import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from './Order';
import { Product } from './Product';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderItem)
  product: Product;
}
