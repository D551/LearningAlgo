
let myArr = [2, 3, 4, 5, 6, 7, 8, 9, 1, 6, 7, 8, 9, 10, 11]
function longestSeries() {
    let maxLength = 0;
    let currentLength = 0;
    for (let j = 0; j < myArr.length - 1; j++) {
        if (myArr[j + 1] - myArr[j] === 1) {
            currentLength++;
        }
        else {
            currentLength = 0
        }
        maxLength = Math.max(maxLength, currentLength)
    }

    return maxLength
}

console.log(longestSeries())
