const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
var db

app.use(cors())
app.use(bodyParser.json())

MongoClient.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) throw err
    db = client.db('beadando')
})

app.get('/',
    (req, res) =>
    res.send('Hello World!')
)

app.listen(8082)