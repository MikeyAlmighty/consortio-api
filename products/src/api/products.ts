import { Express, Request, Response } from 'express';

import ProductService from '../services/product-service';

// import { publishBrandEvent } from '../../../utils/index';

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
          console.error(error)
          return res.status(404).json({ error });
        }
    });

    app.get("/brand/:brandId", async (req: Request, res: Response) => {
        const { brandId } = req.params;
        try {
          const products = await service.getByBrandId(brandId);
          return res.status(200).json(products);
        } catch (error) {
          console.error(error)
          return res.status(404).json({ error });
        }
    });

    app.post("/", async (req: Request, res: Response) => {
        const { name, description, brandId } = req.body
        try {
          const product = await service.createProduct({
            name,
            description,
            brandId
          })
          res.status(201).json(product)
        } catch (error) {
          res.status(400).json({ error })
          console.error(error)
        }
    })

    app.patch("/:id", async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, description } = req.body
        try {
          const product = await service.patchProduct({ id, name, description })
          res.status(200).json(product )
        } catch (error) {
          res.status(400).json({ error })
          console.error(error)
        }
    })

    app.delete("/:id", async (req: Request, res: Response) => {
      const { id } = req.params
      try {
        await service.deleteProduct(id)
        res.status(204).json({})
      } catch (error) {
      console.error(error)
      }
    })
}
