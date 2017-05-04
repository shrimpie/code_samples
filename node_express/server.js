const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config")
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const MongoClient = require("mongodb").MongoClient;
var db;
var uri = "mongodb://" + 
    config.mongodbUser + ":" + 
    config.mongodbPswd +  
    "@ds027335.mlab.com:27335/nodesample";

MongoClient.connect(uri, (err, database) => {
    if (err) {
        return console.log(err);
    }
    db = database;
    app.listen(3000, () => {
        console.log('listening on port 3000')
    });
});

app.get('/', (req, res) => {
        var cursor = db.collection('quotes').find().toArray(function(err, result) {
        res.render('index.ejs', { quotes: result });
    });
});


app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) {
            return console.log(err);
        }
        // console.log('saved to database')
        res.redirect('/');
    });
});

