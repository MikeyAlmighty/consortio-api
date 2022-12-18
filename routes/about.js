"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const properties = require("../package.json");
const aboutRoute = express_1.default.Router();
aboutRoute.get("/", (req, res) => {
    const aboutInfo = {
        name: properties.name,
        description: properties.description,
        author: properties.author
    };
    res.json(aboutInfo);
});
module.exports = aboutRoute;
