"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const Product = require('../models/product')
const product_1 = __importDefault(require("../models/product"));
const productRoute = express_1.default.Router();
productRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.json({name: 'dead'})
    const { name } = req.body;
    try {
        const product = yield product_1.default.find({});
        console.log('inf: ', product);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }
}));
productRoute.get("/:id", (req, res) => {
    // const aboutInfo ={
    //     name: properties.name,
    //     description: properties.description,
    //     author: properties.author
    // }
    res.json({});
});
productRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const product = yield product_1.default.create({ name });
        res.status(200).json(product);
    }
    catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }
}));
// module.exports = productRoute
exports.default = productRoute;
