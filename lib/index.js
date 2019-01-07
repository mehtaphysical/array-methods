function map(arr, fn) {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    mappedArr.push(fn(element));
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

module.exports = {
  map,
  filter
};
