// Input: nums = [7,2,13,11], target = 9
// Output: [0,1]

function twoSum(nums, target) {
    const hash = {}
    for (i = 0; i < nums.length; i++) {
        const noToFind = target - nums[i];
        if (hash.hasOwnProperty(noToFind)) {
            return [hash[noToFind], i]
        }
        hash[nums[i]] = i
    }
    return false;
}

console.log(twoSum([7, 2, 13, 11], 20))
