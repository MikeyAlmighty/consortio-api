import mongoose, { Schema, Document } from "mongoose"


export interface IBrand {
   name: string
   origin: string
   active: boolean
   inceptionDate: Date
   IPR: 'Patent' | 'Trade Secret' | 'Trademark' | 'Copyright' | 'Invention'
}

const brandSchema = new Schema<IBrand>({
    name: {
        type: String
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

// export interface IUser extends mongoose.Document {
//   name: string;
//   somethingElse?: number;
// };

// export const UserSchema = new mongoose.Schema({
//   name: {type:String, required: true},
//   somethingElse: Number,
// });

// const User = mongoose.model<IUser>('User', UserSchema);
// export default User;
