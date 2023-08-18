const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
    res.json({ name: '图雀社区', website: 'https://tuture.co' });
});

app.get('/jerk', (req, res) => {
    res.status(502).json({ error: '公司关门了' });
})

app.get('/bnd', (req, res) => {
    res.end('<html><div>hello</div></html>')
})

app.get('/bdd', (req, res) => {
    res.send('right')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})