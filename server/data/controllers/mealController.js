import Meal from './../models/mealModel.js';
import fs from 'fs';

const htmlRanklist = fs.readFileSync(`../src/templates/ranklist.html`, 'utf-8');

const htmlRankBox = fs.readFileSync(`../src/templates/rank_box.html`, 'utf-8');

const meals = 'dummy'; //fill with db query

//? not needed
export const checkID = (req, res, next) => {
  const id = parseInt(req.params.id);
  const meal = meals.find(el => el.id === id);

  if (!meal) {
    return res.status(404).json({ status: 'fail', message: 'id not found' });
  }
  next();
};

//TODO
export const getRankPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

//TODO
export const getRanklistPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

// gets all meals
export const getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json({
      status: 'success',
      message: meals,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// gets a specific meal by id
export const getMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
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

// gets a specific meal by rank
export const getMealByRank = async (req, res) => {
  try {
    const meal = await Meal.findOne({ rank: req.params.id });
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

// gets a specific meal by rank
export const getMealByName = async (req, res) => {
  try {
    const meal = await Meal.findOne({ rank: req.params.id });
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

// Creating a new MEAL
export const createMeal = async (req, res) => {
  try {
    const meal = req.body;
    Meal.create(meal);
    res.status(200).json({
      status: 'success',
      data: meal,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// Patching a MEAL by ID
export const patchMeal = async (req, res) => {
  try {
    //find meal using id from url
    //new meal info from body
    const mealId = req.params.id;
    const newMeal = req.body;
    //find and update meal, {new} to return updated meal
    const meal = await Meal.findByIdAndUpdate(mealId, newMeal, {
      new: true,
    });

    //give back status with updated meal as message
    res.status(200).json({
      status: 'success',
      data: meal,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
