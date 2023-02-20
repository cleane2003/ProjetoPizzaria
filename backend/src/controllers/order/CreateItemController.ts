import { Request, Response } from 'express';
import { CreateItemService } from '../../services/order/CreateItemService';

export class CreateItemController {
  async handle(req: Request, res: Response) {
    const { orderId, productId, amount } = req.body;
    const createItemService = new CreateItemService();

    const item = await createItemService.execute({
      orderId,
      productId,
      amount,
    });

    return res.json(item);
  }
}
