import { userRepository } from '../../database/repositories/userRepository';

export class DetailUserService {
  async execute(userId: number) {
    const user = await userRepository.findOne({
      where: { id: userId },
      select: { id: true, name: true, email: true },
    });
    return user;
  }
}
