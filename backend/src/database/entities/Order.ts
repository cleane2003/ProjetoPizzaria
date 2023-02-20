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

  @Column({ default: false })
  status: boolean;

  @Column({ default: true })
  draft: boolean;

  @Column({ nullable: true })
  name: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => OrderItem, (orderItems) => orderItems.order)
  orderItems: OrderItem[];
}
