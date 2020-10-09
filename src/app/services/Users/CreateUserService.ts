import { Repository, getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '@/app/models/User';
import { AppError } from '@/app/middlewares';
import { ICreateUserDTO } from './dtos';

export default class CreateUserService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    try {
      const hashedPassword = await hash(password, 8);

      let user = this.usersRepository.create({
        name,
        email,
        password: hashedPassword,
      });

      user = await this.usersRepository.save(user);

      return user;
    } catch (error) {
      throw new AppError('Não foi possível cadastrar usuário', 400);
    }
  }
}
