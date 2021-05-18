import * as eloCtrl from '../controllers/eloController';

// controls what happens before and after battle

// updates after battle
//get meal object from saved state/dom
const updateElo = (m1, m2) => {
  eloArr = eloCtrl.calcElo(m1, m2, m1Victory);
  elo1 = eloArr[0];
  elo2 = eloArr[1];

  //updateElo of meals in db

  //reCalc ranks db
};
