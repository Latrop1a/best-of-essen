import fs from 'fs';
import Meal from './../models/mealModel.js';
import * as helper from './tempFills/tempFillHelper.js';
import createRankingBoxes from './tempFills/tempRankList.js';
import createMealDetails from './tempFills/templDetailsPage.js';

//----------------------------------------------------------------
// todo: 1) get all templates replaced
// todo: 2) implement pagination on rankList / mealList
// todo: 3) rearrange html data somewhere else?

// object with all templates read from file system
export const html = {
  rankList: fs.readFileSync(`./data/assets/templates/rank_list.html`, 'utf-8'),
  rankBox: fs.readFileSync(`./data/assets/templates/rank_box.html`, 'utf-8'),
  tagBox: fs.readFileSync(`./data/assets/templates/tag_box.html`, 'utf-8'),
  battlePage: fs.readFileSync(
    `./data/assets/templates/battle_page.html`,
    'utf-8'
  ),
  mealPage: fs.readFileSync(`./data/assets/templates/meal_page.html`, 'utf-8'),
  mealBox: fs.readFileSync(`./data/assets/templates/meal_box.html`, 'utf-8'),
  //mealList: fs.readFileSync(`./../src/templates/meal_list.html`, 'utf-8'),
};

/**
 * RankList main function creating html
 * @param {*} page page-number per route id
 * @returns full page html
 */
export const rankList = async page => {
  let output = html.rankList;

  // insert meals into the html depending on pagenumber
  try {
    const htmlAdd = await createRankingBoxes(7, page, html);
    output = output.replace(/{%MEAL-RANKINGS%}/g, htmlAdd);

    return output;
  } catch (e) {
    console.log(e);
  }
};

/**
 * mealPage main function creating html
 * @param {*} mealId id of meal to look up details
 * @returns full page html
 */

export const mealPage = async mealId => {
  let output = html.mealPage;

  // insert meal details into html
  try {
    const htmlAdd = await createMealDetails(mealId);
    output = output.replace(/{%MEAL-DETAILS%}/g, htmlAdd);

    return output;
  } catch (e) {
    console.log(e);
  }
};

/**
 * mealPage main function creating html
 *
 * @returns full page html
 */
export const battlePage = async () => {
  let output = html.battlePage;

  // insert meal details into html
  try {
    const htmlAdd = await createBattlePage();
    output = output.replace(/{%BATTLE%}/g, htmlAdd);

    return output;
  } catch (e) {
    console.log(e);
  }
};
