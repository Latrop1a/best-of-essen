import * as siteController from '../controllers/siteRouteHandler.js';
import express from 'express';

const router = express.Router();

router.route('/ranks/:page').get(siteController.getRanklistPage);
router.route('/battle').get(siteController.getBattlePage);
router.route('/mealsOverview').get(siteController.getAllMealPage);
router.route('/meal/:id').get(siteController.getMealPage);
router.route('/tags/:id').get(siteController.getMealPage);

//router.route('/meal/:id').get(siteController.getMeal);

export default router;
