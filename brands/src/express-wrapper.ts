import express, { Express } from 'express';
import cors from 'cors'

import { brandEvents, brands } from './api';

export const expressWrapper = async(app: Express) => {
  app.use(express.json());
  app.use(cors());

  brands(app)

  // Listen to Events
  brandEvents(app)
};
