import { Express, Request, Response } from 'express';

import { BrandModel  } from '../database/models/index'
import BrandService from '../services/brand-service';

export default (app: Express) => {
    const service = new BrandService()
    app.get("/", async (req: Request, res: Response) => {
        try {
          const brands = await service.getBrands();
          return res.status(200).json(brands);
        } catch (error) {
          return res.status(404).json({ error });
        }
    });

    app.get("/:id", async (req: Request, res: Response) => {
        const brandId = req.params.id;
        try {
          const brand = await service.getById(brandId);
          return res.status(200).json(brand);
        } catch (error) {
          return res.status(404).json({ error });
        }
    });

    app.post("/", async (req: Request, res: Response) => {
        const { name, origin, IPR } = req.body
        try {
          const brand = await BrandModel.collection.insertOne({ name, origin, IPR })
          res.status(201).json(brand)
        } catch (error) {
          res.status(400).json({ error })
          console.error(error)
        }
    })

  app.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.body
    try {
      await BrandModel.collection.deleteOne({ id })
      res.status(204).json({})
    } catch (error) {
     console.error(error)
    }
  })
}
