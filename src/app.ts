import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';

import './database';
import routes from './routes';
import { globalExceptionHandler } from './app/middlewares';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middleares();
    this.routes();
  }

  middleares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(globalExceptionHandler());
  }
}

export default new App().server;
