const express = require('express');
const operations = require('./long_number_oprations');
const app = express();
const port = 8080;

app.get('/add', (req, res) => {
    let num1 = operations.string_to_long_number(req.query.first);
    let num2 = operations.string_to_long_number(req.query.sec);
    let out = operations.sum(num1, num2);
    res.send(`${req.query.first} + ${req.query.sec} = ${out.join('')}`);

});

app.get('/multiply', (req, res) => {
    let num1 = operations.string_to_long_number(req.query.first);
    let num2 = operations.string_to_long_number(req.query.sec);
    let out = operations.multiple(num1, num2);
    res.send(`${req.query.first} * ${req.query.sec} = ${out.join('')}`);

});

app.listen(port, () => console.log(`Listening on port ${port}...`));

