"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/products', (0, express_http_proxy_1.default)('http://localhost:8002'));
app.use('/influencers', (0, express_http_proxy_1.default)('http://localhost:8003'));
app.use('/', (0, express_http_proxy_1.default)('http://localhost:8001')); // brands
app.listen(PORT, () => {
    console.log(`⚡️[server]: Gateway is running at https://localhost:${PORT}`);
});
