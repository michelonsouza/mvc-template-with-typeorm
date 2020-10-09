import { Router } from 'express';

import UsersController from '@/app/controllers/UsersController';
import ensureAuthenticated from '@/app/middlewares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.get('/', ensureAuthenticated, UsersController.index);
usersRouter.post('/', UsersController.create);

export default usersRouter;
