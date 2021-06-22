import fs from 'fs';
import Meal from './../models/mealModel.js'

//----------------------------------------------------------------
// todo: 1) get all templates replaced
// todo: 2) implement pagination on rankList / mealList
// todo: 3) rearrange html data somewhere else?

// object with all templates
const html = {
  ranklist = fs.readFileSync(`./src/templates/rank_list.html`, 'utf-8'),
  rankBox = fs.readFileSync(`./src/templates/rank_box.html`, 'utf-8'),
  battle = fs.readFileSync(`./src/templates/battle.html`, 'utf-8'),
  mealPage = fs.readFileSync(`./src/templates/meal.html`, 'utf-8'),
  mealList = fs.readFileSync(`./src/templates/meal_list.html`, 'utf-8'),
}

//defunc
export const mealPage = (html, type) => {
  let output = template.replace(/{%MEALNAME%}/g, meal.name);
  output = template.replace(/{%RANKING%}/g, meal.rank);
  output = template.replace(/{%%}/g, meal.s1);
  output = template.replace(/{%%}/g, meal.s2);
  output = template.replace(/{%%}/g, meal.s3);

  return output;
};

// red
export const rankList = meal => {
  let output = html.rankList;

  output = output.replace(/{%MEAL-RANKINGS%}/g, meal.name);

  return output;
};

// creates html with several rankboxes
const createRankingBoxes = (numOfMeal, page) => {
  let output;

  //1: get mealArr sorted by rank and correct page
  //todo get sorted by rank and depending on pagenubmer
  mealArr = Meal.find();

  //2: insert numOf Meals html
  for (let i = 0; i <= numOfMeal; i++) {
    output.replace(rankBox())
    
  }

}

// replaces one rankBox with meal data
const rankBox = meal => {
  //get html template for rankBox
  let output = html.rankBox;

  //replace place holders with meal data
  //chose rnd image
  output = output.replace(/{%MEAL-PIC%}/g, getRndEle(meal.img));
  output = output.replace(/{%MEALNAME%}/g, meal.name);
  output = output.replace(/{%RANKING%}/g, meal.rank);
  output = output.replace(/{%TAGS%}/g, tagBox(meal.tags));
  output = output.replace(/{%%}/g, meal.s2);
  output = output.replace(/{%%}/g, meal.s3);

  return output;
};

// used in rankBox replace to create the tags html
// creates html from meal tags array ..displaying 3
const tagBox = mealTagsArr => {
  let output = html.tagBox;

  let tagsArr = getXRndEles(mealTagsArr, 3);

  //replaces all 3 tags
  for (let i = 0; i < 3; i++) {

    output.replace(/{%TAG-NAME%}/g, tagsArr[0]);
  }

};

// small fnc to chose rnd arr ele
const getRndEle = arr => {
  return arr[Math.floor(Math.random * arr.length)];
};

// functions returns arr with x random eles from input arr
const getXRndEles = (arr, num) => {
  let retArr = [];
  for (let i = 0; i < num; i++) {
    ele = getRndEle(arr);
    while (retArr.includes(ele)) {
      ele = getRndEle(arr);
    }
    retArr.push(ele);
  }
  return retArr;
};
