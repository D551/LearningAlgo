// Input - [1,2,3,4,2,3,1,4,6,2]
// Output - [1,2,3,4,6]
function removeDuplicate(dupArray) {
    const uniqueArray = dupArray.filter((x, index) => {
        return dupArray.indexOf(x) === index;
    })
    return uniqueArray
}

console.log(removeDuplicate([1, 2, 3, 4, 2, 3, 1, 4, 6, 2]))