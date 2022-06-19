const name = {
    firstName: 'Devansh',
    lastName: 'Dwivedi'
};

function getName(city, state, country) {
    return this.firstName + ' ' + this.lastName + ' ' + city + ' ' + state + ' ' + country;
}

var newFunc = getName.bind(name, 'Lucknow', 'UP');
console.log(newFunc("India"));

Function.prototype.bindPollyfill = function (...args) {
    let obj = this;
    let params = args.slice(1)
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

var PollyFillFuncCall = getName.bindPollyfill(name)
console.log(PollyFillFuncCall())