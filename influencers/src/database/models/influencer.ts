import mongoose from "mongoose"

const Schema = mongoose.Schema

const influencerSchema = new Schema({
    name: {
      type: String
    },
    posts: {
      type: Number
    },
    sales: {
      type: Number
    },
    clicks: {
      type: Number
    }
}, { timestamps: true })

export default mongoose.model('influencer', influencerSchema)
