import fs from 'fs';
import Meal from '../models/mealModel.js';
import Rank from '../models/rankModel.js';

// updating ranks after elo change
export const updateRankList = (req, res) => {
  try {
    const mealranksList = await Rank.find();
    res.status(200).json({
      status: 'success',
      message: meal,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// getting the rankList from meals
export const populateRankList = (req, res) => {
  try {
    const mealList = await Meal.find();
    console.log(mealList);
    res.status(200).json({
      status: 'success',
      message: rankList,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
