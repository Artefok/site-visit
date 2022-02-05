const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine');
app.set('views', './templates/');

app.use(express.static(__dirname + "/static/"));

app.get("/", (req, res) => {
    res.render("index.hbs");
});

app.listen(3000);