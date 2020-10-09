import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import { ListUsersService, CreateUserService } from '@/app/services/Users';

class UsersController {
  async index(_: Request, response: Response): Promise<Response> {
    const usersService = new ListUsersService();
    const users = await usersService.execute();

    return response.json(classToClass(users));
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const usersService = new CreateUserService();

    const user = await usersService.execute({ name, email, password });

    return response.json(classToClass(user));
  }
}

export default new UsersController();
