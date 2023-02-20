import { orderRepository } from '../../database/repositories/orderRepository';

interface OrderRequest {
  id: number;
}

export class DeleteOrderService {
  async execute({ id }: OrderRequest) {
    const orderId = await orderRepository.findOneBy({ id });

    if (!orderId) {
      throw new Error('not exist');
    }

    await orderRepository.delete({ id });

    return orderId;
  }
}
