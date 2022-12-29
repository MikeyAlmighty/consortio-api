import express, { Express } from 'express';
import cors from 'cors'

import { products, productEvents } from './api';

export const expressWrapper = async(app: Express) => {
  app.use(express.json());
  app.use(cors());

  products(app)

  // Listen to Events
  productEvents(app)
};
