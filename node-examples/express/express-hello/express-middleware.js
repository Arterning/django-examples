const express = require('express')
const app = express();
const port = 3000

function loggingMiddleware(req, res, next) {
  const time = new Date();
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  console.log('you are great');
  next();
}

app.use(loggingMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})