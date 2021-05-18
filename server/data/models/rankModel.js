import mongoose from 'mongoose';

const rankSchema = new mongoose.Schema({
  rank: {
    type: Number,
    default: 0,
  },
  elo: {
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
});

const Rank = mongoose.model('Rank', rankSchema);

export default Rank;
