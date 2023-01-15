import express from 'express';
import mongoose from 'mongoose'
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

import { expressWrapper } from './express-wrapper'

const StartServer = async() => {
  const app = express();
  config()
  app.use(bodyParser.json())
  app.use(cors())

  const PORT = process.env.PORT;
  const MONGODB_URI = process.env.MONGODB_URI

  const databaseConnection = async (MONGODB_URI: string | undefined) => {
    try {
        if (MONGODB_URI) {
          await mongoose.connect(MONGODB_URI);
          console.log("Database Connected");
        } else {
          console.log('Failed to connect to Database');
            throw new Error('[Database]: Failed to connect')
        }
    } catch (error) {
      console.log(error);
    }
  };

  await databaseConnection(MONGODB_URI)
  await expressWrapper(app);

  app.listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
  })
  .on('error', (err) => {
      console.log(err);
      process.exit();
  })
}

StartServer();
