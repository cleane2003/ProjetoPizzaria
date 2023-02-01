import { userRepository } from '../../database/repositories/userRepository';
import bcrypt from 'bcrypt';

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error('Email incorrect');
    }

    const userAlreadyExists = await userRepository.findOneBy({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = userRepository.create({ name, email, password: passwordHash });

    await userRepository.save(user);

    return user;
  }
}
