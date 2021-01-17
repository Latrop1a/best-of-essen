import * as siteController from '../controllers/siteRouteHandler.js';

const router = express.Router();

router.route('/ranks/:page?').get(siteController.getRankPage);
router.route('/battle').get(siteController.getBattlePage);
router.route('/mealsOverview').get(siteController.getAllMealPage);
router.route('/meal/:id').get(siteController.getMeal);

export default router;
