import mongoose from 'mongoose';

const StormSchema = new mongoose.Schema({
  tweetId: {
    type: Number,
    required: [true, 'tweet id is missing...'],
  },
  userId: {
    type: Number,
    required: [true, 'user is is missing...'],
  },
});

export default mongoose.models.Storm || mongoose.model('Storm', StormSchema);
