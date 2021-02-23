import Meal from './../models/mealModel.js';

const htmlRanklist = fs.readFileSync(`./src/templates/ranklist.html`, 'utf-8');

const htmlRankBox = fs.readFileSync(`./src/templates/rank_box.html`, 'utf-8');

const meals = 'dummy'; //fill with db query

export const checkID = (req, res, next) => {
  const id = parseInt(req.params.id);
  const meal = meals.find(el => el.id === id);

  if (!meal) {
    return res.status(404).json({ status: 'fail', message: 'id not found' });
  }
  next();
};

export const getRankPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getRanklistPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

// gets all meals
export const getAllMealPage = async (req, res) => {
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

//gets a specific meal by id
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
