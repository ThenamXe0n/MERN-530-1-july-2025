/// Array sorting methods .sort()
let ranking = [1, 3, 5, 1, 7, 55, 100, 56, 6];
ranking.sort((a, b) => {
  console.log(`a ===> ${a},b===> ${b}`);
  return a - b;
});
console.log(ranking);

//=============pseudo code for the sorting process================

let 