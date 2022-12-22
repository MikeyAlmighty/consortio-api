// import express, { Express, Request, Response } from 'express';
// const dotenv = require('dotenv')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// import mongoose from 'mongoose'

// dotenv.config();

// const app: Express = express();
// const PORT = process.env.PORT;

// app.use(cors())

// // const aboutRouter = require("./routes/about");
// import productRouter from "./routes/products"
// import influencerRouter from "./routes/influencer"
// import brandRouter from "./routes/brands"

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )


// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// app.use("/products", productRouter);
// app.use("/influencer", influencerRouter);
// app.use("/brands", brandRouter);

// // Connect to DB
// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI)
//     .then(() => {
//       app.listen(PORT, () => {
//         console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
//       });
//     })
//     .catch((error) => console.error(error))
// } else {
//   console.error('No MONGODB_URI provided')
// }
