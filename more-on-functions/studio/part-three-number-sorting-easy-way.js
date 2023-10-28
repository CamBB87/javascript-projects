//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function sortNumLow(arr) {
    let sorted = [];
    sorted = arr.sort(function (a, b) { return a - b }); //need explaining for function
    return sorted;
  }
//Sort each array in decending order.
function sortNumHigh(arr) {
    let sorted = [];
    sorted = arr.sort(function (a, b) { return b - a }); //need explaining for function
    return sorted;
  }

  console.log(sortNumLow(nums2))
  console.log(sortNumHigh(nums3))