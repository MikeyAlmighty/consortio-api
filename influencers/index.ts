import express, { Express, Request, Response } from 'express'
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

config()
const app: Express = express()
const PORT = process.env.PORT;

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ msg: "Hello from influencers" });
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Influencers server is running at https://localhost:${PORT}`);
});
