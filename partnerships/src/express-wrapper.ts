import express, { Express } from 'express';
import cors from 'cors'

import { partnerships, partnershipEvents } from './api';

export const expressWrapper = async(app: Express) => {
  app.use(express.json());
  app.use(cors());

  partnerships(app)

  // Listen to Events
  partnershipEvents(app)
};
