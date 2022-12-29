import mongoose, { Schema } from "mongoose"

export interface IProduct {
  name: string
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model<IProduct>('product', productSchema)
