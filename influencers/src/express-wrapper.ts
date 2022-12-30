import express, { Express } from 'express';
import cors from 'cors'

import { influencers, influencerEvents } from './api';

export const expressWrapper = async(app: Express) => {
  app.use(express.json());
  app.use(cors());

  influencers(app)

  // Listen to Events
  influencerEvents(app)
};
