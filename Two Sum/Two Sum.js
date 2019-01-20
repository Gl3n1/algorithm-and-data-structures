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

// what i can take away from this answer. originally i have implemented the brute force method which has the
// O(n^2) time complexity. Then after research, i have found there are other methods such as the greedy approach
// , from what i've seen, solving methods with objects is the fastest apporach. This approach is a O(n)

// break down of problem..

// The map object stores the difference between our target and sum, and set that as key in the obj. the value is the actual
// is the actual element at that point