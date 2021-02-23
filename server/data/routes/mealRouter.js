import * as mealController from '../controllers/mealController.js';
import express from 'express';

const router = express.Router();

router
  .route('/')
  .get(mealController.getAllMeals)
  .post(mealController.createMeal);

router.route('/:?id').get(mealController.getMeal);

export default router;
