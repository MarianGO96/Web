const express = require('express')
const app = express()
const port = 3000
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:asdasd@127.0.0.1:5432/website')

app.get('/', async (req, res) => {
    const time = await db.query('	select * from utilizatori');
    res.send(time)  
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))