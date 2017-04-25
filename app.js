const express = require('express');
const volleyball = require('volleyball')
const app = express();


var status;


app.use(volleyball); //first call: before following func, last call: after

app.use("/", function(req, res, next) {
    /*res.on("testEvent", () => {
        console.log(res.statusCode)
    }) */ //jury-rigged implementation
    console.log(req.method, req.url);
    //res.emit("testEvent") //adds the eventemitter to the test queue
    next();
});

app.use("/special/", function(req, res, next) {
    res.send("you've reached the special area.")
});

app.get("/", function(req, res) {
    res.status(200).send("welcome!");
});

const PORT = 3001;
app.listen(PORT, function() {
    console.log("server listening");
});