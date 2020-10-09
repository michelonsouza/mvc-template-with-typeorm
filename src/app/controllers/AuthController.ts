import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import { CreateAuthService } from '@/app/services/Users';

class AuthController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authService = new CreateAuthService();

    const { user, token } = await authService.execute({ email, password });

    return response.json({ token, user: classToClass(user) });
  }
}

export default new AuthController();
