const path = require("path");
const express = require('express');
const app = express();

app.listen (3030, () =>
console.log ("Hola")
);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/views/product", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/product.html"))
})

app.get("/views/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.get("/views/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})

app.get("/*", (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});