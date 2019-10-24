const express = require('express');
const operations = require('./long_number_oprations');
const app = express();
const port = 8080;

// get sum request
app.get('/sum', (req, res) => {
    let num1 = operations.string_to_long_number(req.query.first);
    let num2 = operations.string_to_long_number(req.query.second);
    let out = operations.sum(num1, num2);
    res.send(`${req.query.first} + ${req.query.second} = ${out.join('')}`);
});

// get multiply request
app.get('/multiply', (req, res) => {
    let num1 = operations.string_to_long_number(req.query.first);
    let num2 = operations.string_to_long_number(req.query.second);
    let out = operations.multiple(num1, num2);
    res.send(`${req.query.first} * ${req.query.second} = ${out.join('')}`);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

