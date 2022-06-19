// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

function maxContainer(height) {
    let max = 0, i = 0, j = height.length - 1;
    while (i < j) {
        const leftHeight = height[i];
        const rightHeight = height[j];
        const distance = j - i;
        const minHeight = Math.min(leftHeight, rightHeight);
        max = Math.max(max, minHeight * distance);
        if (leftHeight < rightHeight) {
            i++;
        } else {
            j--;
        }
    }
    return max;
}

console.log(maxContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]))