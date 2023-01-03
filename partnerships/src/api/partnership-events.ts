import { Express, Request, Response, NextFunction } from 'express'
import PartnershipService from "../services/partnership-service";

 const partnershipEvents = (app: Express) => {
    const service = new PartnershipService();

    app.use('/events',async (req: Request, res: Response, next: NextFunction) => {
        const { payload } = req.body;

        // Handle subscribe events
        service.subscribeEvents(payload);

        console.log("============= Partnerships ===============");
        console.log(payload);

        res.json(payload);
    });
}

export default partnershipEvents
