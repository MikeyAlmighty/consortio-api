// import express, { Express, Request, Response } from 'express';
// import { CallbackError } from 'mongoose'
// import Brand from '../models/brand'

// const brandRouter = express.Router();

// brandRouter.get("/", async (req: Request, res: Response) => {
//     const { name } = req.body
//     try {
//         const product = await Brand.find({})
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(400).json({ error })
//         console.error(error)
//     }
// })

// brandRouter.get("/:id", (req: Request, res: Response) => {
//     res.json({})
// })

// brandRouter.delete("/:id", (req: Request, res: Response, next) => {
//      Brand.findByIdAndRemove(req.params.id, (error: CallbackError, data: any) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

// brandRouter.post("/", async (req: Request, res: Response) => {
//     const { name, origin, IPR } = req.body
//     try {
//       const brand = await Brand.collection.insertOne({ name, origin, IPR })
//       res.status(201).json(brand)
//     } catch (error) {
//       res.status(400).json({ error })
//       console.error(error)
//     }
// })

// // TODO: Update toggle of active/inactive brand
// // brandRouter.post("/:id/toggle", async(req: Request, res: Response)=> {
// //     const { active  } = req.body
// //     try {
// //         const brand = await Brand.updateOne({ $where })
// //         res.status(200).json(brand)
// //     } catch (error) {
// //         res.status(400).json({ error  })
// //         console.error(error)
// //     }
// // })


// export default brandRouter
