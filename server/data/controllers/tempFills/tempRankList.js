import * as Helper from './tempFillHelper.js';
import Meal from './../../models/mealModel.js';
import { html } from './../template-filler.js';

/**
 * Creates html with several rankboxes used in rankList Html
 * @param {*} numOfMeal how many meals displayed per page
 * @param {*} page page-number so the right meals are displayed
 * @returns string html to be used in ranklist
 */
const createRankingBoxes = async (numOfMeal, page) => {
  let output = '';

  //1: get mealArr sorted by rank and correct page
  //todo get sorted by rank and depending on pagenubmer
  try {
    const mealArr = await Meal.find();
    //2: insert numOf Meals html
    for (let i = 0; i < numOfMeal; i++) {
      output = output + rankBox(mealArr[i]);
    }
    return output;
  } catch (e) {
    console.log(e);
  }
};

// replaces one rankBox with meal data
const rankBox = meal => {
  //get html template for rankBox
  let output = html.rankBox;

  //replace place holders with meal data
  //chose rnd image
  output = output.replace(
    /{%MEAL-PIC%}/g,
    Helper.getImgStr(meal.images, meal.ident)
  );
  output = output.replace(/{%MEALNAME%}/g, meal.name);
  output = output.replace(/{%RANKING%}/g, meal.rank);
  output = output.replace(/{%TAGS%}/g, tagBox(meal.tags));
  output = output.replace(/{%MEAL_ID%}/g, meal.ident);

  return output;
};

// used in rankBox replace to create the tags html
// creates html from meal tags array ..displaying 3
const tagBox = mealTagsArr => {
  let output = html.tagBox;

  let tagsArr = Helper.getXRndEles(mealTagsArr, 3);

  //replaces all 3 tags
  for (let i = 0; i < 3; i++) {
    output = output.replace(/{%TAG%}/, tagsArr[i]);
    output = output.replace(/{%TAG-NAME%}/, tagsArr[i]);
  }
  return output;
};

export default createRankingBoxes;
