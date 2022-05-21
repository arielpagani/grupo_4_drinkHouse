const path = require("path");
const express = require('express');
const app = express();
const mainRouter = require("./routes/mainRouter");
const methodOverride = require("method-override");
const fs = require("fs");
//const sitcoms = fs.readFileSync("sitcoms.txt", utf-8);

app.use(methodOverride("_method"));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", mainRouter);

app.listen (3000, () => {console.log ("Servidor Funcionando");})

app.get("/*", (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});