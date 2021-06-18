import * as eloCtrl from '../controllers/eloController';

// controls what happens before and after battle

// updates after battle
//get meal object from saved state/dom
const updateElo = (winnerMeal, loserMeal) => {
  eloArr = eloCtrl.calcElo(winnerMeal, loserMeal, m1Victory);
  elo1 = eloArr[0];
  elo2 = eloArr[1];

  //updateElo of meals in db

  //reCalc ranks db
};

const updateView = () => {};

//getting 2 meals out of the Database
//todo might make it more probable to get meals with low fight count

const get2RndMeals = () => {
  return;
};
