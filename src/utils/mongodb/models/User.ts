import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'user id is missing...'],
  },
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
