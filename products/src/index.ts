import express from 'express';
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

import databaseConnection from '../../utils/db-connection'
import { expressWrapper } from './express-wrapper'

const StartServer = async() => {
  const app = express();
  config()
  app.use(bodyParser.json())
  app.use(cors())

  const PORT = process.env.PORT;
  const MONGODB_URI = process.env.MONGODB_URI

  await databaseConnection(MONGODB_URI);
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
