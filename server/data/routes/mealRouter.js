import * as mealController from '../controllers/mealController.js';

const router = express.Router();

router.route('/').get(mealController.getAllMeals);
router.route('/battle').get(mealController.getBattlePage);
router.route('/mealsOverview').get(mealController.getAllMealPage);
router.route('/meal/:id').get(mealController.getMeal);

export default router;
