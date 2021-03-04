import mongoose, { Document } from 'mongoose';

export interface UserDocument extends Document {
  userId: number;
  email: string;
}

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: [true, 'user id is missing...'],
    },
    email: {
      type: String,
      required: [true, 'email is missing...'],
    },
  },
  { timestamps: true },
);

export const User = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);
