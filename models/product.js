"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const productSchema = new Schema({
    name: {
        type: String
    }
}, { timestamps: true });
// module.exports = mongoose.model('product', productSchema)
exports.default = mongoose_1.default.model('product', productSchema);
