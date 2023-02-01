import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './Product';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
