// import express, { Express, Request, Response } from 'express';
// const Influencer = require('../models/influencer')

// const influencerRoute = express.Router();

// influencerRoute.get("/", async (req: Request, res: Response)=> {
//     // res.json({})
// })

// influencerRoute.get("/:id", (req: Request, res: Response)=> {
//     // const aboutInfo ={
//     //     name: properties.name,
//     //     description: properties.description,
//     //     author: properties.author
//     // }
//     res.json({})
// })

// influencerRoute.post("/", async(req: Request, res: Response)=> {
//     const { name } = req.body
//     try {
//         const influencer = await Influencer.create({ name })
//         res.status(200).json(influencer)
//     } catch (error) {
//         res.status(400).json({ error  })
//         console.error(error)
//     }
// })

// export default influencerRoute
