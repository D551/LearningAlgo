// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
//          k = 4 
// Output : 39

function maxSumWindow(arr, k) {
    let currentSum = 0, maxSum = 0, start = 0;
    for (var i = 0; i < k; i++) {
        currentSum = currentSum + arr[i];
        maxSum = currentSum;
    }
    for (var j = k; j < arr.length; j++) {
        currentSum = currentSum + arr[j] - arr[start];
        start++;
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
}
console.log(maxSumWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))