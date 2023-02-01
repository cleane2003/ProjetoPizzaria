import { AppDataSource } from '../index';
import { User } from '../entities/User';

export const userRepository = AppDataSource.getRepository(User);
