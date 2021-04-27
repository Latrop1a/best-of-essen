import * as mealController from '../controllers/mealController.js';
import express from 'express';

const router = express.Router();

// Meal with no ID
router
  .route('/')
  .get(mealController.getAllMeals)
  .post(mealController.createMeal);

// Meal by ID
router.route('/:?id').get(mealController.getMeal);

router.route('/:?id').patch(mealController.patchMeal);

// MEAL by rank
router.route('/byRank/:?id').get(mealController.getMealByRank);

// Meal by name
router.route('/byName/:?id').get(mealController.getMealByName);

export default router;
