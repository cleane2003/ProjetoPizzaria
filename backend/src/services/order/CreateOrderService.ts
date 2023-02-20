import { orderRepository } from '../../database/repositories/orderRepository';

interface OrderRequest {
  table: number;
  name: string;
}

export class CreateOrderService {
  async execute({ table, name }: OrderRequest) {
    const order = orderRepository.create({ table, name });

    await orderRepository.save(order);

    return order;
  }
}
