import { Express, Request, Response } from 'express';

import { BrandModel } from '../database/models/index'
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
        const { name, origin, IPR, incorporationDate } = req.body
        try {
          const brand = await service.createBrand({
            name,
            origin,
            IPR,
            incorporationDate
          })
          res.status(201).json(brand)
        } catch (error) {
          res.status(400).json({ error })
          console.error(error)
        }
    })

    app.patch("/:id", async (req: Request, res: Response) => {
        const { id } = req.params
      console.log('req.params: ', req.params)
        const { name, origin, IPR, incorporationDate } = req.body
        try {
          const brand = await service.patchBrand({ id, name, origin, IPR, incorporationDate })
          res.status(200).json(brand)
        } catch (error) {
          res.status(400).json({ error })
          console.error(error)
        }
    })

    app.delete("/:id", async (req: Request, res: Response) => {
      const { id } = req.params
      try {
        await service.deleteBrand(id)
        res.status(204).json({})
      } catch (error) {
        res.status(400).json({ error })
        console.error(error)
      }
    })
}
