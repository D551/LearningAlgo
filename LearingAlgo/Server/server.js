const express = require('express');

const app = express();
const port = 3000;

const loggerMiddleware = function (req, res, next) {
    console.log('Logger');
    next();
}

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('None shall pass');
});

app.listen(port, () => { console.log('app started in port ', port) })

