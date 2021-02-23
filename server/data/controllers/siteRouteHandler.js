import fs from 'fs';

const htmlRanklist = fs.readFileSync(`./src/templates/ranklist.html`, 'utf-8');

const htmlRankBox = fs.readFileSync(`./src/templates/rank_box.html`, 'utf-8');

export const getRankPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getRanklistPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getAllMealPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getBattlePage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getMeal = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};
