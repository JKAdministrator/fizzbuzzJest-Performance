// given an array of numbers and a number, get tyhe two positions of the array that get the sum
// asumming there is always 2 or more elements on the array and the numbers are 0 or positive
function twoZumBruteforce(array, number) {
  let value1 = {
    value: 0,
    position: -1,
  };
  let value2 = {
    value: 0,
    position: -1,
  };
  let target = number;
  //get the first element
  value1.position = array.findIndex((e, index) => {
    return value1.position < index && e < target;
  });

  while (value1.position > -1) {
    value1.value = array[value1.position];
    value2.position = array.findIndex((e) => {
      return e + value1.value === number;
    });
    if (value2.position > -1)
      return { x1: value1.position, x2: value2.position };
    value1.position = array.findIndex((e, index) => {
      return value1.position < index && e < target;
    });
  }
}

function twoZumHashmap(array, number) {
  const prevMap = [];
  const response = { x1: undefined, x2: undefined };
  array.every((e, index) => {
    let diff = number - e;
    let resp = prevMap.findIndex((e) => {
      return e === diff;
    });
    if (resp > -1) {
      response.x1 = index;
      response.x2 = resp;
      return false;
    }
    prevMap.push(e);
    return true;
  });
  return response;
}

const array = [
  0, 1, 4, 2, 5, 98, 5, 2, 3, 4, 58, 14, 2, 8, 1, 25, 581432, 149, 4, 51, 8, 45,
  1, 9, 4,
];
const numberToFind = 100;
let startTime = performance.now();
console.log(twoZumBruteforce(array, numberToFind));
let endTime = performance.now();
console.log({ function: "twoZumBruteforce", timeElapsed: endTime - startTime });
startTime = performance.now();
console.log(twoZumHashmap(array, numberToFind));
endTime = performance.now();
console.log({ function: "twoZumHashmap", timeElapsed: endTime - startTime });
