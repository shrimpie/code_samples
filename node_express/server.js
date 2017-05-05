const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config")
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bodyParser.json());


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
    db.collection('quotes')
      .findOneAndUpdate({ name: req.body.name }, {
        $set: {
          name: req.body.name,
          quote: req.body.quote
        }
      }, {
        sort: {_id: -1},
        upsert: true
      }, (err, result) => {
        if (err) {
            return res.send(err);
        }
        res.redirect('/');
      });
});

app.delete('/quotes', (req, res) => {

    db.collection('quotes')
    .findOneAndDelete(
        {
            name: req.body.name,
            quote: req.body.quote
        },
        (err, result) => {
            if (err) {
                return res.send(500, err);
            }
            // res.redirect('/');
            res.send({status: 'Successfully deleted'});
        });
})

