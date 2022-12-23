import express, { Express } from 'express';
import cors from 'cors'

import { brands } from './api';

// const { CreateChannel } = require("./utils");

export const expressWrapper = async(app: Express) => {
  app.use(express.json());
  app.use(cors());

  brands(app)
    // const channel = await CreateChannel();
};
