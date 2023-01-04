import { Express, Request, Response } from 'express';

import PartnershipService from '../services/partnership-service';

export default (app: Express) => {
    const service = new PartnershipService()
    app.get("/", async (req: Request, res: Response) => {
        try {
          const partnerships = await service.getPartnerships();
          return res.status(200).json(partnerships);
        } catch (error) {
          return res.status(404).json({ error });
        }
    });

    app.get("/:id", async (req: Request, res: Response) => {
        const partnershipId = req.params.id;
        try {
          const partnership = await service.getById(partnershipId);
          return res.status(200).json(partnership);
        } catch (error) {
          return res.status(404).json({ error });
        }
    });

    app.post("/", async (req: Request, res: Response) => {
        const {
          brandName,
          influencerName,
          productName,
          brandId,
          influencerId,
          partnershipDate,
          productId,
        } = req.body
        try {
          const partnership = await service.createPartnership({
            // TODO: For now let FE pass the friendly names, but moving to event to retreive names (via Id)
            description: `Partnership between ${brandName} (brand) and ${influencerName} (influencer) for ${productName} (product).`,
            brandId,
            influencerId,
            productId,
            partnershipDate,
            isActive: true
          })
          res.status(201).json(partnership)
        } catch (error) {
          res.status(400).json({ error })
          console.error(error)
        }
    })

    app.patch("/:id", async (req: Request, res: Response) => {
      const { id } = req.params
      try {
        await service.terminatePartnership(id)
        res.status(204).json({})
      } catch (error) {
        res.status(400).json({ error })
        console.error(error)
      }
    })
}
