import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Need a meal name'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Need a meal description'],
    trim: true,
  },
  images: {
    type: [String],
    required: [true, 'Need a meal pic'],
  },
  ingredients: {
    type: [String],
    required: [true, 'Need some ingredients'],
  },
  tags: [String],
  effort: {
    type: String,
    required: [true, 'Need a meal effort'],
  },
  rank: {
    type: Number,
    default: 999,
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
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Meal = mongoose.model('Meal', mealSchema);

export default Meal;
