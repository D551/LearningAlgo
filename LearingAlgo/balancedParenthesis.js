function isBalanced(expr) {
    const stack = [];
    for (i = 0; i < expr.length; i++) {
        if (expr[i] === '{' || expr[i] === '(' || expr[i] === '[') {
            stack.push(expr[i]);
            continue;
        }
        if (expr[i] === '}') {
            if (stack[stack.length - 1] === '{') {
                stack.pop();
            }
        }
        if (expr[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            }
        }
        if (expr[i] === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop();
            }
        }
    }

    if (stack.length === 0) {
        return true
    } else {
        return false
    }
}

console.log(isBalanced('{[{]}]}'));
//console.log(isBalanced('[{[(]}}'));