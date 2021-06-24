import fs from 'fs';
import Meal from './../models/mealModel.js';
import * as templateFiller from '../controllers/template-filler.js';

export const getRankPage = (req, res) => {
  // create Rank Page from template
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

// creates rankList HTML based on pagenumber of request id
export const getRanklistPage = async (req, res) => {
  try {
    const page = req.params.page;
    const html = await templateFiller.rankList(page);
    /* res.status(200).json({
      status: 'success',
      data: { html },
      send: html,
    }); */
    res.send(html);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

export const getAllMealPage = (req, res) => {
  // create List of all meals page
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getBattlePage = (req, res) => {
  // standard battle page

  // get meals for first battle

  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

//meal detail page
export const getMealPage = (req, res) => {
  let meal;
  // get meal data
  meal = Meal.findById(req.params.id);

  // modify placeholders with meal

  // serve

  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};
