function map(arr, fn) {
  return reduce(arr, (acc, ele, i) => {
    if(arr.hasOwnProperty(i)) acc[i] = fn(ele);
    return acc;
  }, []);
}

function filter(arr, fn) {
  return reduce(arr, (acc, ele) => {
    if(fn(ele)) acc.push(ele);
    return acc;
  }, []);
}

function findIndex(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) return i;
  }

  return -1;
}

function every(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(!fn(arr[i])) return false;
  }

  return true;
}

function reduce(arr, fn, initialValue) {
  if(arr.length < 1) return initialValue;
  console.log(arr);
  if(!initialValue) {
    return reduce(tail(arr), fn, arr[0]);
  }

  let acc = initialValue;
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) acc = fn(acc, arr[i], i);
  }

  return acc;
}

// arr = [1, 2, 3, 4];
// tailArr = [2, 3, 4]
function tail(arr) {
  let t = [];
  for(let i = 1, j = 0; i < arr.length; i++, j++) {
    if(arr.hasOwnProperty(i)) t[j] = arr[i];
  }

  return t;
}

function forEach(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) fn(arr[i]);
  }
}

module.exports = {
  map,
  filter,
  findIndex,
  every,
  reduce,
  forEach
};
