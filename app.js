
const express = require('express')

const port = 8080
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => res.send('test'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))