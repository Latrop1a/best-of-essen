import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Need a username'],
  },
  permission: {
    type: String,
    default: 'user',
  },
  battles: {
    type: Number,
    default: 0,
  },
  wins: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  lastLogin: {
    type: Date,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
