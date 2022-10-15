function throttle(func, limit) {
    let flag = true;
    if (flag) {
        func();
        flag = false;
        setTimeout(() => {
            flag = true;
        }, limit)
    }
}