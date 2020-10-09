import { Router } from 'express';

import AuthController from '@/app/controllers/AuthController';

const authRouter = Router();

authRouter.post('/', AuthController.create);

export default authRouter;
