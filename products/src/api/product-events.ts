import { Express, Request, Response, NextFunction } from 'express'
import ProductService from "../services/product-service";

 const productEvents = (app: Express) => {
    const service = new ProductService();

    app.use('/events',async (req: Request, res: Response, next: NextFunction) => {
        const { payload } = req.body;

        // Handle subscribe events
        service.subscribeEvents(payload);

        console.log("============= Products ===============");
        console.log(payload);

        res.json(payload);
    });
}

export default productEvents
