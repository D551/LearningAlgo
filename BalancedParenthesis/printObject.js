const input = {
    fruit: {
        mango: {
            orange: {
                apple: {
                    quantity: 10
                },
                quantity: 20
            },
            quantity: 30
        },
        qunatity: 40
    }
}

// output: "fruit-mongo-orange-apple-quantity-10"
// "fruit-mongo-orange-quantity-20"
// "fruit-mongo-quantity-30"


let newStr = '';
const arr = [];
const keyArr = [];
function printObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            keyArr.push(key)
            printObject(obj[key])
        } else {
            if (arr.length > 0) {
                keyArr.pop();
            }
            newStr = keyArr.join('-');
            newStr = newStr + '-' + key + '-' + obj[key]
            arr.push(newStr)

        }
    }
    return arr
}

console.log(printObject(input))
