import mongoose, { Schema } from "mongoose"

export interface IBrand {
   name: string
   origin: string
   active: boolean
   inceptionDate: Date
   IPR: 'Patent' | 'Trade Secret' | 'Trademark' | 'Copyright' | 'Invention'
}

const brandSchema = new Schema<IBrand>({
    name: {
      type: String,
      required: true
    },
    origin: {
        type: String
    },
    active: {
        type: Boolean
    },
    inceptionDate: {
        type: Date
    },
    IPR: {
      type: String,
      enum : ['Patent','Trade secret', 'Trademark', 'Copyright', 'Invention'],
      default: 'Patent'
    }
}, { timestamps: true })

export default mongoose.model<IBrand>('brand', brandSchema)
