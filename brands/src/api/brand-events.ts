import { Express, Request, Response, NextFunction } from 'express'
import BrandService from "../services/brand-service";

 const brandEvents = (app: Express) => {
    const service = new BrandService();

    app.use('/events',async (req: Request, res: Response, next: NextFunction) => {
        const { payload } = req.body;

        // Handle subscribe events
        service.subscribeEvents(payload);

        console.log("============= Brands===============");
        console.log(payload);

        res.json(payload);
    });
}

export default brandEvents
