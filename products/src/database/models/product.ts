import mongoose, { Schema } from "mongoose"

export interface IProduct {
  name: string
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model<IProduct>('product', productSchema)
