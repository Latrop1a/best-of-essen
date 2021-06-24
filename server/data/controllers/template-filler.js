import fs from 'fs';
import Meal from './../models/mealModel.js';

//----------------------------------------------------------------
// todo: 1) get all templates replaced
// todo: 2) implement pagination on rankList / mealList
// todo: 3) rearrange html data somewhere else?

// object with all templates read from file system
const html = {
  rankList: fs.readFileSync(`./../src/templates/rank_list.html`, 'utf-8'),
  rankBox: fs.readFileSync(`./../src/templates/rank_box.html`, 'utf-8'),
  tagBox: fs.readFileSync(`./../src/templates/tag_box.html`, 'utf-8'),
  //battle: fs.readFileSync(`./../src/templates/battle.html`, 'utf-8'),
  //mealPage: fs.readFileSync(`./../src/templates/meal.html`, 'utf-8'),
  //mealList: fs.readFileSync(`./../src/templates/meal_list.html`, 'utf-8'),
};

/**
 * RankList main function
 * @param {*} page page-number per route id
 * @returns full page html
 */
export const rankList = async page => {
  let output = html.rankList;

  // insert meals into the html depending on pagenumber
  try {
    const htmlAdd = await createRankingBoxes(2, page);
    output = output.replace(/{%MEAL-RANKINGS%}/g, htmlAdd);

    return output;
  } catch (e) {
    console.log(e);
  }
};

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
  output = output.replace(/{%MEAL-PIC%}/g, getRndEle(meal.images));
  output = output.replace(/{%MEALNAME%}/g, meal.name);
  output = output.replace(/{%RANKING%}/g, meal.rank);
  output = output.replace(/{%TAGS%}/g, tagBox(meal.tags));

  return output;
};

// used in rankBox replace to create the tags html
// creates html from meal tags array ..displaying 3
const tagBox = mealTagsArr => {
  let output = html.tagBox;

  let tagsArr = getXRndEles(mealTagsArr, 3);

  //replaces all 3 tags
  for (let i = 0; i < 3; i++) {
    output = output.replace(/{%TAG%}/, tagsArr[i]);
    output = output.replace(/{%TAG-NAME%}/, tagsArr[i]);
  }
  return output;
};

// helper fnc to chose rnd arr ele
const getRndEle = arr => {
  let rndEle = Math.floor(Math.random() * arr.length);
  return arr[rndEle];
};

// helper func returns arr with (num) random eles from input arr
const getXRndEles = (arr, num) => {
  let retArr = [];
  for (let i = 0; i < num; i++) {
    let ele = getRndEle(arr);
    arr.splice(arr.indexOf(ele), 1);
    retArr.push(ele);
  }
  return retArr;
};
