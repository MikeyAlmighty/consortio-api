import { Express, Request, Response } from 'express';

import { ProductModel  } from '../database/models/index'
import ProductService from '../services/product-service';

export default (app: Express) => {
    const service = new ProductService()

    app.get("/", async (req: Request, res: Response) => {
        try {
          const products = await service.getProducts();
          return res.status(200).json(products);
        } catch (error) {
          return res.status(404).json({ error });
        }
    });

    app.get("/:id", async (req: Request, res: Response) => {
        const productId = req.params.id;
        try {
          const product = await service.getById(productId);
          return res.status(200).json(product);
        } catch (error) {
          return res.status(404).json({ error });
        }
    });

    app.post("/", async (req: Request, res: Response) => {
        const { name } = req.body
        try {
          const product = await ProductModel.collection.insertOne({
             name
          })
          res.status(201).json(product)
        } catch (error) {
          res.status(400).json({ error })
          console.error(error)
        }
    })

  app.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.body
    try {
      await ProductModel.collection.deleteOne({ id })
      res.status(204).json({})
    } catch (error) {
     console.error(error)
    }
  })
}
