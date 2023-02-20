import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/UpdateUserService';

export class UpdateUserController {
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const updateUserService = new UpdateUserService();

    const updateUser = await updateUserService.execute({
      id,
      name,
      email,
      password,
    });

    return res.json(updateUser);
  }
}
