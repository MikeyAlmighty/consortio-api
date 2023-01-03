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
        const { name, origin, IPR, incorporationDate } = req.body
        try {
          const partnership = await service.createPartnership({
            name,
            origin,
            IPR,
            incorporationDate
          })
          res.status(201).json(partnership)
        } catch (error) {
          res.status(400).json({ error })
          console.error(error)
        }
    })

    app.delete("/:id", async (req: Request, res: Response) => {
      const { id } = req.params
      try {
        await service.deletePartnership(id)
        res.status(204).json({})
      } catch (error) {
        res.status(400).json({ error })
        console.error(error)
      }
    })
}
