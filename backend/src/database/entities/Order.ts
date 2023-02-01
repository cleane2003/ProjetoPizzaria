import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { OrderItem } from './OrderItem';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  table: number;

  @Column()
  status: boolean;

  @Column()
  draft: boolean;

  @Column()
  name: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => OrderItem, (orderItems) => orderItems.order)
  orderItems: OrderItem[];
}
