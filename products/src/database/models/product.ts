import mongoose, { Schema } from "mongoose"

export interface IProduct {
  id?: string
  brandId: string
  name: string
  description: string
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    brandId: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model<IProduct>('product', productSchema)
