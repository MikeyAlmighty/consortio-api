import mongoose, { Schema } from "mongoose"

export interface IPartnership {
  id?: string
  description: string
  brandId: string
  influencerId: string
  productId: string
  partnershipDate: Date
  terminationDate?: Date
  isActive: boolean
}

const partnershipSchema = new Schema<IPartnership>({
    description: {
      type: String,
      required: true
    },
    brandId: {
      type: String,
      required: true
    },
    influencerId: {
      type: String,
      required: true
    },
    productId: {
      type: String
    },
    partnershipDate: {
      type: Date,
      required: true
    },
    terminationDate: {
      type: Date
    },
    isActive: {
      type: Boolean
    },
})

export default mongoose.model<IPartnership>('partnership', partnershipSchema)
