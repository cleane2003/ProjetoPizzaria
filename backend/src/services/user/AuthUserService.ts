import { userRepository } from '../../database/repositories/userRepository';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

interface AuthRequest {
  email: string;
  password: string;
}

export class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await userRepository.findOneBy({ email });

    if (!user) {
      throw new Error('User or password incorrect');
    }

    const verifyPassword = await compare(password, user.password);

    if (!verifyPassword) {
      throw new Error('User or password incorrect');
    }

    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_TOKEN ?? '',
      {
        expiresIn: '8h',
      },
    );

    const { password: _, ...userLogin } = user;

    return {
      user: userLogin,
      token: token,
    };
  }
}
