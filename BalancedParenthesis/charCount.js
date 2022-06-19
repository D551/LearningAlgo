// Input - madam
// Output - a2d1m2

function charCount(str) {
    const sortedStr = str.split('').sort();
    const obj = {};
    let output = '';
    for (var i = 0; i < sortedStr.length; i++) {
        if (obj[sortedStr[i]] !== undefined) {
            obj[sortedStr[i]] = obj[sortedStr[i]] + 1
        }
        else {
            obj[sortedStr[i]] = 1
        }
    }
    // for (var [key, value] of Object.entries(obj)) {
    //     output = output + key + value
    // }

    for (var key in obj) {
        output = output + key + obj[key]
    }
    return output;
}

console.log(charCount('madam'))