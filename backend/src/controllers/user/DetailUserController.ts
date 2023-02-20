import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

export class DetailUserController {
  async handle(req: Request, res: Response) {
    const detailUserService = new DetailUserService();

    const userId = req.user;

    const user = await detailUserService.execute(userId);

    return res.json(user);
  }
}
