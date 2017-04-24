const express = require('express');
const app = express();

var status;


app.use("/", function(req, res, next) {
	// res.on("end", () => {
	// 	console.log(res);
	// });
	console.log(req.method, req.url, res.status);
	next();
});

app.get("/", function(req, res) {
	res.status(200).send("welcome!");
});

const PORT = 3000;
app.listen(PORT, function() {
	console.log("server listening");
});