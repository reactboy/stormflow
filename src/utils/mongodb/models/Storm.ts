import mongoose, { Document } from 'mongoose';

export interface StormDocument extends Document {
  tweetId: number;
  userId: number;
}

const StormSchema = new mongoose.Schema(
  {
    tweetId: {
      type: Number,
      required: [true, 'tweet id is missing...'],
    },
    userId: {
      type: Number,
      required: [true, 'user is is missing...'],
    },
  },
  {
    timestamps: true,
  },
);

export const Storm = mongoose.models.Storm || mongoose.model<StormDocument>('Storm', StormSchema);
