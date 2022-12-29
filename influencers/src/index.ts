import express from 'express';
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

import { databaseConnection } from './database'
import { expressWrapper } from './express-wrapper'

const StartServer = async() => {
  const app = express();
  config()
  app.use(bodyParser.json())
  app.use(cors())

  const PORT = process.env.PORT;

  await databaseConnection();
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
