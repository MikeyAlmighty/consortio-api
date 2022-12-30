import mongoose, { Schema } from "mongoose"

export interface IInfluencer {
  firstName: string
  lastName: string
  handle: string
  posts: number
  clicks: number
  socialDetails: {
    email: string
    instagram?: string
    tiktok?: string
    youtube?: string
  }
}

const influencerSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    handle: {
      type: String,
      required: true
    },
    posts: {
      type: Number,
      required: true
    },
    clicks: {
      type: Number
    },
    socialDetails: {
      email: {
        type: String,
        required: true
      },
      instagram: {
        type: String
      },
      tiktok: {
        type: String
      },
      youtube: {
        type: String
      },
    }
}, { timestamps: true })

export default mongoose.model('influencer', influencerSchema)
