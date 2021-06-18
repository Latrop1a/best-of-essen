import mongoose from 'mongoose';

const rankSchema = new mongoose.Schema({
  mealID: {
    type: Number,
    required: true,
  },
  rank: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 1000,
  },
  battles: {
    type: Number,
    default: 0,
  },
  wins: {
    type: Number,
    default: 0,
  },
  updatedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Rank = mongoose.model('Rank', rankSchema);

export default Rank;
