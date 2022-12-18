"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose')
const mongoose_1 = __importDefault(require("mongoose"));
dotenv.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
// const aboutRouter = require("./routes/about");
const products_1 = __importDefault(require("./routes/products"));
const influencer_1 = __importDefault(require("./routes/influencer"));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
// app.use("/about", aboutRouter);
app.use("/products", products_1.default);
app.use("/influencer", influencer_1.default);
// Connect to DB
if (process.env.MONGODB_URI) {
    mongoose_1.default.connect(process.env.MONGODB_URI)
        .then(() => {
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
        });
    })
        .catch((error) => console.error(error));
}
else {
    console.error('No MONGODB_URI provided');
}
