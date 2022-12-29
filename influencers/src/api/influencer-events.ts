import { Express, Request, Response, NextFunction } from 'express'
import InfluencerService from "../services/influencer-service";

 const influencerEvents = (app: Express) => {
    const service = new InfluencerService();

    app.use('/events',async (req: Request, res: Response, next: NextFunction) => {
        const { payload } = req.body;

        // Handle subscribe events
        service.subscribeEvents(payload);

        console.log("============= Influencers ===============");
        console.log(payload);

        res.json(payload);
    });
}

export default influencerEvents
