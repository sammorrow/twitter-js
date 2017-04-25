const express = require('express');
const volleyball = require('volleyball')
const nunjucks = require('nunjucks')
const app = express();


//nunjucks
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });
var main = function() {
    nunjucks.render('index.html', locals, function(err, output) {
        console.log(output);
    });
}

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf' },
        { name: 'Frodo' },
        { name: 'Hermione' }
    ]
};

//express

app.use(volleyball); //first call: before following func, last call: after
app.use("/", function(req, res, next) {
    /*res.on("testEvent", () => {
        console.log(res.statusCode)
    }) */ //jury-rigged implementation
    console.log(req.method, req.url);
    //res.emit("testEvent") //adds the eventemitter to the test queue
    main();
    next();
});

app.use("/special/", function(req, res, next) {
    res.send("you've reached the special area.")
});

app.get("/", function(req, res) {
    res.status(200).send("welcome!");
});

app.get("/views/index.html", function(req, res) {
    //res.sendfile('./views/index.html') //untemplated, raw file
    res.render('index.html', locals);
});

const PORT = 3001;
app.listen(PORT, function() {
    console.log("server listening");
});