import fs from 'fs';
import Meal from './../models/mealModel.js';

const k = 15;

const updateElo = (m1Elo, m2Elo, outcomeInt) => {
  const m1expected, m2expected, m1New, m2New, outcomeInt2;

  //outcomeInt is 1 for m1 won, 0 for m1 lost
  outcomeInt == 1 ? outcomeInt2 = 0 : outcomeInt2 = 1;


  // calc expected points for meals
  m1expected = 1 / ( 1 + ( 10 * ( (m2Elo - m1Elo) / 400 )));
  m2expected = 1 - m1expected;

  // calc new Elos
  m1New = m1Elo + k * ( outcomeInt - m1expected);
  m2New = m2Elo + k * ( outcomeInt2 - m1expected);
};

