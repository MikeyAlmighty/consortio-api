import express, { Express } from 'express'
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import proxy from 'express-http-proxy'

config()
const app: Express = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(cors())

app.use('/products', proxy('http://localhost:8002'))
app.use('/influencers', proxy('http://localhost:8003'))
app.use('/', proxy('http://localhost:8001')) // brands

app.listen(PORT, () => {
  console.log(`⚡️[server]: Gateway is running at https://localhost:${PORT}`);
})
