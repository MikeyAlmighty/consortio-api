import mongoose from "mongoose"

const Schema = mongoose.Schema

const brandSchema = new Schema({
    name: {
        type: String
    },
    origin: {
        type: String
    },
    active: {
        type: Boolean
    },
    IPR: {
      type: String,
      enum : ['Patent','Trade secret', 'Trademark', 'Copyright', 'Invention'],
      default: 'Patent'
    }
}, { timestamps: true })

export default mongoose.model('brand', brandSchema)
