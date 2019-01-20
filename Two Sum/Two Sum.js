const twoSum = (arr, target) => {
  let map = {},
    results = [];

  for(let i=0;i<arr.length;i++) {
    if(map[arr[i]] === undefined) {
      map[target - arr[i]] = arr[i]
    } else {
      results.push([map[arr[i]], arr[i]])
    }
  }

  return results;
}

console.log(twoSum([7, 0, -4, 5, 2, 3],5))