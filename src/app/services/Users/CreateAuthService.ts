import { Repository, getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '@/app/models/User';
import AppError from '@/app/middlewares/AppError';
import authConfig from '@/config/auth';

import { ICreateAuthDTO } from './dtos';

interface IResponse {
  user: User;
  token: string;
}

export default class CreateAuthService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  async execute({ email, password }: ICreateAuthDTO): Promise<IResponse> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw new Error();
      }

      const passwordMached = await compare(password, user.password);

      if (!passwordMached) {
        throw new Error();
      }

      const { expiresIn, secret } = authConfig.jwt;

      const token = sign({}, secret, {
        subject: user.id,
        expiresIn,
      });

      return { user, token };
    } catch (error) {
      throw new AppError('E-mail ou senha inválidos', 401);
    }
  }
}
