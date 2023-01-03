export const analyseArray = (arr) => {
  return {
    min: min(arr),
    average: average(arr),
    max: max(arr),
    length: arr.length
  }
}

const average = (arr) => {
  return arr.reduce((a,b) => a+b) / arr.length;
}

const min = (arr) => {
  const arrSorted = arr.sort();
  return arrSorted[0];
}

const max = (arr) => {
  const arrSorted = arr.sort((a,b,) => b-a);
  return arrSorted[0]
}

