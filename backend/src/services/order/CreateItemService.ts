import { itemRepository } from '../../database/repositories/itemRepository';

interface ItemRequest {
  order: number;
  product: number;
  amount: number;
}

export class CreateItemService {
  async execute({ order, product, amount }: ItemRequest) {
    const item = itemRepository.create({ order, product, amount });

    await itemRepository.save(item);

    return item;
  }
}
