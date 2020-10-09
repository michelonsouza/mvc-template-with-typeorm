import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middleares();
  }

  middleares() {
    this.server.use(express.json());
  }
}

export default new App().server;
