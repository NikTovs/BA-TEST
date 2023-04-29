/**
 * You are working in a casino and are tasked with developing a classic slot game machine.
 *
 * Considering a slot machine with three rows and three vertical reels defined like this:
 * Reel1: ['cherry', 'lemon', 'apple',  'lemon', 'banana', 'banana', 'lemon', 'lemon']
 * Reel2: ['lemon', 'apple',  'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon']
 * Reel3: ['lemon', 'apple',  'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']
 *
 * Using these reels, complete the calculateResult function so that, when it's called, it gives back the result of a spin.
 * The calculateResult function takes 3 arguments, each specifying a stopping position for the corresponding reel.
 * The stopping positions describe the array index of the first symbol shown in each column. Since the machine shows
 * three rows of each reel, given a stopping position i, the reel will show symbols i, i+1, and i+2.
 *
 * 3 Cherries in a row: won 50 coins
 * 2 Cherries in a row: won 40 coins
 * 3 Apples in a row: won 20 coins
 * 2 Apples in a row: won 10 coins
 * 3 Bananas in a row: won 15 coins
 * 2 Bananas in a row: won 5 coins
 * 3 Lemons in a row: won 3 coins
 *
 *
 *   Example:
 *    Given the stopping positions (0, 2, 7), the slot machine would look like this:
 *
 *       Reel1      Reel2     Reel3
 *    --------------------------------
 *    |  cherry  |  lemon  |  lemon  |
 *    |  lemon   |  lemon  |  lemon  |
 *    |  apple   |  cherry |  apple  |
 *    --------------------------------
 *
 *   The machine shows three lemons in the second row (gives 3 coins) and two apples in the third row (gives 10 coins).
 *   Therefore the total win amount is 13.
 *
 */

const reel1 = ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'];
const reel2 = ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'];
const reel3 = ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'];

function setRows(pos1, pos2, pos3) {
  const rowsToDisplay = 3;
  const rows = [];
  for (let i = 0; i < rowsToDisplay; i++) {
    // Each row is an array
    rows.push([reel1[(pos1 + i) % reel1.length],
    reel2[(pos2 + i) % reel2.length],
    reel3[(pos3 + i) % reel3.length]]);
  }
  return rows;
}

// calculate equal items in the row
function countEqualItems(row) {
  const result = [];
  const temp = {}
  
  row.forEach((item => {
    temp[item] = (temp[item] || 0) + 1;
  }));

  Object.keys(temp).forEach((key => {
    result.push({key,'quantity': temp[key]})
  }));
  return result;
}

function returnCoins(item, quantity) {
  // return 0 if impossible to gain coins
  if (quantity < 2) { return 0 };
  // check quantity 
  // if not 2 then return result as for 3
  switch (item) {
    case 'cherry':
      return quantity === 2 ? 40 : 50
    case 'apple':
      return quantity === 2 ? 10 : 20
    case 'banana':
      return quantity === 2 ? 5 : 15
    case 'lemon':
      return quantity === 3 ? 3 : 0
    default:
      return 0;
  }
}

setRows(7, 6, 3);

function calculateResult(position1, position2, position3) {
  const rows = setRows(position1, position2, position3);
  let countedItemsArr = [];
  let coinsTotal = 0;

  rows.forEach((row => {
    countedItemsArr = [...countedItemsArr, ...countEqualItems(row)];
  }));

  countedItemsArr.forEach((obj => {
    coinsTotal += returnCoins(obj.key, obj.quantity);
  }));

  return coinsTotal;
}

module.exports = calculateResult;
