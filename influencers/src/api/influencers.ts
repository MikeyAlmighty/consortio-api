import { Express, Request, Response } from 'express';

import { InfluencerModel  } from '../database/models/index'
import InfluencerService from '../services/influencer-service';

export default (app: Express) => {
    const service = new InfluencerService()

    app.get("/", async (req: Request, res: Response) => {
        try {
          const influencers = await service.getInfluencers();
          return res.status(200).json(influencers);
        } catch (error) {
          return res.status(404).json({ error });
        }
    });

    app.get("/:id", async (req: Request, res: Response) => {
        const influencerId = req.params.id;
        try {
          const influencer = await service.getById(influencerId);
          return res.status(200).json(influencer);
        } catch (error) {
          return res.status(404).json({ error });
        }
    });

    app.post("/", async (req: Request, res: Response) => {
        const {
          firstName,
          lastName,
          handle,
          posts,
          clicks,
          socialDetails
        } = req.body
        try {
          const influencer = await InfluencerModel.collection.insertOne({
            firstName,
            lastName,
            handle,
            posts,
            clicks,
            socialDetails
          })
          res.status(201).json(influencer)
        } catch (error) {
          res.status(400).json({ error })
          console.error(error)
        }
    })

    app.patch("/:id", async (req: Request, res: Response) => {
        const { id } = req.params
        const { firstName, lastName, socialDetails } = req.body
        try {
          const influencer = await service.patchInfluencer({ id, firstName, lastName, socialDetails })
          res.status(200).json(influencer)
        } catch (error) {
          res.status(400).json({ error })
          console.error(error)
        }
    })

    app.delete("/:id", async (req: Request, res: Response) => {
      const { id } = req.body
      try {
        await InfluencerModel.collection.deleteOne({ id })
        res.status(204).json({})
      } catch (error) {
      console.error(error)
      }
    })
}
