import * as Helper from './tempFillHelper.js';
import Meal from './../../models/mealModel.js';
import { html } from './../template-filler.js';

/**
 * Creates html with several rankboxes used in rankList Html
 * @param {*} numOfMeal how many meals displayed per page
 * @param {*} page page-number so the right meals are displayed
 * @returns string html to be used in ranklist
 */
const createMealDetails = async mealId => {
  try {
    const meal = await Meal.find({ ident: mealId });

    console.log('hello');
    let output = mealBox(meal);

    return output;
  } catch (e) {
    console.log(e);
  }
};

// replaces one rankBox with meal data
const mealBox = meal => {
  //get html template for mealBox
  let output = html.mealBox;

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
// creates html from meal tags array ..displaying all
const tagBox = mealTagsArr => {
  let output = html.tagBox;

  //lists all tags
  for (let i = 0; i < mealTagsArr.length; i++) {
    output = output.replace(/{%TAG%}/, tagsArr[i]);
    output = output.replace(/{%TAG-NAME%}/, tagsArr[i]);
  }
  return output;
};

//used in mealBox to list all ingredients
const tagBox = mealTagsArr => {
  let output = html.tagBox;

  //lists all tags
  for (let i = 0; i < mealTagsArr.length; i++) {
    output = output.replace(/{%TAG%}/, tagsArr[i]);
    output = output.replace(/{%TAG-NAME%}/, tagsArr[i]);
  }
  return output;
};

export default createMealDetails;
