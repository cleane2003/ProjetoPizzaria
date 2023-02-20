import { userRepository } from '../../database/repositories/userRepository';

interface UserRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UpdateUserService {
  async execute({ id, name, email, password }: UserRequest) {
    if (!email) {
      throw new Error('Email incorrect');
    }

    const userAlreadyExists = await userRepository.findOneBy({ email });

    if (userAlreadyExists) {
      throw new Error('User does not exists');
    }

    const updateUser = userRepository.update(Number(id), {
      name,
      email,
      password,
    });

    return updateUser;
  }
}
