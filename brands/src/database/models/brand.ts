import mongoose, { Schema } from "mongoose"

export interface IBrand {
   id?: string
   name: string
   origin: string
   active?: boolean
   incorporationDate: Date
   IPR: 'PATENT' | 'TRADE_SECRET' | 'TRADE_MARK' | 'COPYRIGHT' | 'INVENTION'
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
    incorporationDate: {
        type: Date,
        required: true
    },
    IPR: {
      type: String,
      enum : ['PATENT','TRADE_SECRET', 'TRADE_MARK', 'COPYRIGHT', 'INVENTION'],
      default: 'PATENT'
    }
}, { timestamps: true })

export default mongoose.model<IBrand>('brand', brandSchema)
