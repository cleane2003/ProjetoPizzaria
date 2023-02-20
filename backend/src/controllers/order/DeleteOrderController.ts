import { Request, Response } from 'express';
import { DeleteOrderService } from '../../services/order/DeleteOrderService';

export class DeleteOrderController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteOrderService = new DeleteOrderService();

    const order = await deleteOrderService.execute({ id: Number(id) });

    return res.json(order);
  }
}
