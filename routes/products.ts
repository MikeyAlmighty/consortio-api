import express, { Express, Request, Response } from 'express';
// const Product = require('../models/product')
import Product from '../models/product'

const productRouter = express.Router();

productRouter.get("/", async (req: Request, res: Response)=> {
    const { name } = req.body
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error  })
        console.error(error)
    }
})

productRouter.get("/:id", (req: Request, res: Response)=> {
    res.json({})
})

productRouter.post("/", async(req: Request, res: Response)=> {
    const { name } = req.body
    try {
        const product = await Product.create({ name })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error  })
        console.error(error)
    }
})

export default productRouter
