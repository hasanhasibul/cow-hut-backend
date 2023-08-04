import mongoose, { InferSchemaType, Schema } from 'mongoose'
import { userInterface } from './user.interface'

const userSchema = new Schema<userInterface>(
  {
    name: {
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
    },
    address: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: ['buyer', 'seller'],
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export type UserModalType = InferSchemaType<typeof userSchema>

const userModal = mongoose.model<userInterface>('User', userSchema)

export default userModal
