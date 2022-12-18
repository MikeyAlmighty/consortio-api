import express, { Express, Request, Response } from 'express';
// const Product = require('../models/product')
import Product from '../models/product'

const productRoute = express.Router();

productRoute.get("/", async (req: Request, res: Response)=> {
    // res.json({name: 'dead'})
    const { name } = req.body
    try {
        const product = await Product.find({})
        console.log('inf: ', product)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error  })
        console.error(error)
    }
})

productRoute.get("/:id", (req: Request, res: Response)=> {
    // const aboutInfo ={
    //     name: properties.name,
    //     description: properties.description,
    //     author: properties.author
    // }
    res.json({})
})

productRoute.post("/", async(req: Request, res: Response)=> {
    const { name } = req.body
    try {
        const product = await Product.create({ name })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error  })
        console.error(error)
    }
})

// module.exports = productRoute
export default productRoute