import mongoose, { Schema } from "mongoose"

export interface IInfluencer {
  name: string
  posts: number
  clicks: number
}

const influencerSchema = new Schema({
    name: {
      type: String
    },
    posts: {
      type: Number
    },
    clicks: {
      type: Number
    }
}, { timestamps: true })

export default mongoose.model('influencer', influencerSchema)
