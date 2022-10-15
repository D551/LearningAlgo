// input =[-1,0,1,2,-1,-4,-1,-1,2] , sum=0
// Output= [[-1,-1,2],[-1,0,1]]

function threeSumProblem(nums, sum = 0) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        let currentSum = 0
        while (right > left) {
            currentSum = nums[i] + nums[left] + nums[right];
            if (currentSum === sum) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
            else if (currentSum < sum) {
                left++;
            } else if (currentSum > sum) {
                right--;
            }
        }
    }
    return result;
}

console.log(threeSumProblem([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4], 0))
