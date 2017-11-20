var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 5000;
var cheerio = require("cheerio");
var request = require("request");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use("/public", express.static(__dirname + "/public"));


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));

});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
