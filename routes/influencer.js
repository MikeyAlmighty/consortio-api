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
const Influencer = require('../models/influencer');
const influencerRoute = express_1.default.Router();
influencerRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.json({})
}));
influencerRoute.get("/:id", (req, res) => {
    // const aboutInfo ={
    //     name: properties.name,
    //     description: properties.description,
    //     author: properties.author
    // }
    res.json({});
});
influencerRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const influencer = yield Influencer.create({ name });
        res.status(200).json(influencer);
    }
    catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }
}));
exports.default = influencerRoute;
