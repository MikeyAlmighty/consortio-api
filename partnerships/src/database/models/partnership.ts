import mongoose, { Schema } from "mongoose"

export interface IPartnership {
  id?: String
  description: String
  brandId: String
  influencerId: String
  productIds: String[] // multiple product(Id)s
  partnershipDate: Date
  terminationdate?: Date
  isActive: boolean
}

const partnershipSchema = new Schema<IPartnership>({
    description: {
        type: String,
        required: true
    },
    brandId: {
        type: String
    },
    influencerId: {
        type: String
    },
    productIds: [{
        type: String
    }]
})

export default mongoose.model<IPartnership>('partnership', partnershipSchema)
