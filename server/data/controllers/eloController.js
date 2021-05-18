import fs from 'fs';
import Meal from './../models/mealModel.js';


// select k (uncertainty) depending on number of battles
const kSelect = (numBattles) => {

  if (numBattles > 20) {
    return 20;
  } else if (numBattles > 10) {
    return 25;
  } else if (numBattles > 5) {
    return 30;
  } else {
    return 40
  }
}

// calc Elo rating after meal battle
// m means meal object
export const calcElo = (m1, m2, outcomeInt) => {
  const m1expected, m2expected, m1New, m2New, outcomeInt2;

  //outcomeInt is 1 for m1 won, 0 for m1 lost
  outcomeInt == 1 ? outcomeInt2 = 0 : outcomeInt2 = 1;

  // calc expected points for meals
  m1expected = 1 / ( 1 + Math.pow(10, (m2.rating - m1.rating) / 400 ));
  m2expected = 1 - m1expected;

  // calc new Elos using k depending on num of battles
  m1New = m1.rating + kSelect(m1.battles) * ( outcomeInt - m1expected);
  m2New = m2.rating + kSelect(m2.battles) * ( outcomeInt2 - m1expected);

  return [m1New, m2New];
};

