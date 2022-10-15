
function areBracketsBalanced(expr) {

    // Using ArrayDeque is faster
    // than using Stack class
    let stack = [];

    // Traversing the Expression
    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];

        if (x == '(' || x == '[' || x == '{') {
            stack.push(x);
        }
        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    // Check Empty Stack
    return (stack.length == 0);
}

// Driver code
let expr = "([{]}])";

// Function call
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");
