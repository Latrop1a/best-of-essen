//
// Helper functions
//

// helper fnc to chose rnd arr ele
export const getRndEle = arr => {
  let rndEle = Math.floor(Math.random() * arr.length);
  return arr[rndEle];
};

//helper fnc to construct img string for replacement
export const getImgStr = (numImg, mealIdent) => {
  let idStr = '' + mealIdent;
  let numStr = '' + Math.round(Math.random() * numImg);
  if (mealIdent < 10) {
    idStr = '00' + mealIdent;
  } else if (mealIdent < 100) {
    idStr = '0' + mealIdent;
  }
  if (numImg < 10) {
    numStr = '0' + numStr;
  }

  return idStr + '-' + numStr;
};

// helper fnc to chose rnd int from 0 to limit
export const getRndNum = numLimit => {
  return Math.round(Math.random * numLimit);
};

// helper func returns arr with (num) random eles from input arr
export const getXRndEles = (arr, num) => {
  let retArr = [];
  for (let i = 0; i < num; i++) {
    let ele = getRndEle(arr);
    arr.splice(arr.indexOf(ele), 1);
    retArr.push(ele);
  }
  return retArr;
};
