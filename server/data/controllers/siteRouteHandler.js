import fs from 'fs';
import Meal from './../models/mealModel.js';
import * as templateFiller from '../controllers/template-filler.js';

export const getRankPage = (req, res) => {
  // create Rank Page from template
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

/**
 * creates rankList HTML based on pagenumber of request id
 * @param {*} req contains page number for pagination of list
 * @param {*} res response send to client
 */
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

/**
 * creates rankList HTML based on pagenumber of request id
 * @param {*} req contains mealID
 * @param {*} res response send to client
 */
export const getMealPage = async (req, res) => {
  try {
    const id = req.params.id;
    const html = await templateFiller.mealPage(id);
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
