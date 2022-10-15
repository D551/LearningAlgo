// Input - [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output - 6 , [4, -1, 2, 1]

// function maxSum(arr) {
//     let currentSum = arr[0];
//     let maxSum = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         currentSum = Math.max((currentSum + arr[i]), arr[i])
//         maxSum = Math.max(currentSum, maxSum)
//     }
//     return maxSum;
// }

// console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))




















// Input - [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output - 6 , [4, -1, 2, 1]
function _maxSumContinious(arr) {
    let currentSum = arr[0];
    let maxSum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        currentSum = Math.max((currentSum + arr[i]), arr[i]);
        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum
}

console.log(_maxSumContinious([-2, 1, -3, 4, -1, 2, 1, -5, 4]))