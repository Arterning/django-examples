const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const port = 3000;

const app = express();

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
