// Input - Tact coa
// Output - True - (taco cat, atco cta)

function palindromePrmutation(str) {
    const newStr = str.toLowerCase();
    const hash = {};
    let charCount = 0;
    for (var i = 0; i < newStr.length; i++) {
        if (newStr[i] === ' ') {
            continue;
        }
        if (hash[newStr[i]]) {
            delete hash[newStr[i]];
        }
        else {
            hash[newStr[i]] = true;
        }
        charCount++;
    }
    if (charCount % 2 === 0) {
        return Object.keys(hash).length === 0;
    }
    return Object.keys(hash).length === 1;
}

console.log(palindromePrmutation('Tact coa'));
console.log(palindromePrmutation('devansh hi'));