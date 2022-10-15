
//Input : sum(1)(2)(3)
//Output : 6

const sumRecursive = function (a) {
    return function (b) {
        if (b) {
            return sumRecursive(a + b);
        }
        return a;
    }
};

console.log(sumRecursive(1)(2)(3)())
