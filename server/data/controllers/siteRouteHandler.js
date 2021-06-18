import fs from 'fs';
import Meal from './../models/mealModel.js';

const htmlRanklist = fs.readFileSync(`./src/templates/rank_list.html`, 'utf-8');
const htmlRankBox = fs.readFileSync(`./src/templates/rank_box.html`, 'utf-8');
const htmlBattle = fs.readFileSync(`./src/templates/battle.html`, 'utf-8');
const htmlMealPage = fs.readFileSync(`./src/templates/meal.html`, 'utf-8');
const htmlMealList = fs.readFileSync(`./src/templates/meal_list.html`, 'utf-8');

// default template replacer - html and object passed into
const replaceTemplate = (template, meal) => {
  let output = template.replace(/{%MEALNAME%}/g, meal.name);
  output = template.replace(/{%RANKING%}/g, meal.rank);
  output = template.replace(/{%%}/g, meal.s1);
  output = template.replace(/{%%}/g, meal.s2);
  output = template.replace(/{%%}/g, meal.s3);
};

export const getRankPage = (req, res) => {
  // create Rank Page from template
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getRanklistPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getAllMealPage = (req, res) => {
  // create List of all meals page
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getBattlePage = (req, res) => {
  // standard battle page

  // get html template

  // get meals for first battle

  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

//meal detail page
export const getMealPage = (req, res) => {
  let meal, html;
  // get html templates
  html = htmlMealPage;
  // get meal data
  meal = Meal.findById(req.params.id);

  // modify placeholders with meal

  // serve

  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};
