function map(arr, fn) {
  // mappedArr = [4, 8, , 12]
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      mappedArr[i] = fn(arr[i]);
    }
  }

  return mappedArr;
}

function filter(arr, fn) {
  const filteredArr = [];
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(fn(element)) {
      filteredArr.push(element);
    }
  }

  return filteredArr;
}

function reduce(arr, fn, initialValue) {
  // let i = initialValue ? 0 : 1
  // let acc = initialValue || arr[0]
  let i = 0;
  let acc = initialValue;
  if(!acc) {
    acc = arr[0];
    i = 1;
  }

  for(i; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }

  return acc;
}

module.exports = {
  map,
  filter,
  reduce
};
