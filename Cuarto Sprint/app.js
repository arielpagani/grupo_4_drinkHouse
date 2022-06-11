<<<<<<< HEAD
const path = require("path");
=======
>>>>>>> 12ac4be43f846cc1246d1e9f62c0a725491e4d0f
const express = require('express');
const app = express();
const mainRouter = require("./routes/mainRouter");
const methodOverride = require("method-override");
<<<<<<< HEAD
const fs = require("fs");
//const sitcoms = fs.readFileSync("sitcoms.txt", utf-8);
=======
const session = require("express-session");
//let db = require('../database/models')
// Middlewares Globales
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

//cokkies
const cokkies = require("cookie-parser");

//Middleware de aplicacion para la session
app.use(session({
    secret: "Esto es un secreto",
    resave: false,
    saveUninitialized: false,
}));

//Cookie de aplicacion global
app.use(cokkies());

//Middleware de aplicacion global
app.use(userLoggedMiddleware);

//captura la informacion que se envia por el body del formulario
app.use(express.urlencoded({extended: false}));
>>>>>>> 12ac4be43f846cc1246d1e9f62c0a725491e4d0f

app.use(methodOverride("_method"));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", mainRouter);

<<<<<<< HEAD
app.listen (3030, () => {console.log ("Servidor Funcionando");})
=======
app.listen (3000, () => {console.log ("Servidor Funcionando en puerto 3000");})
>>>>>>> 12ac4be43f846cc1246d1e9f62c0a725491e4d0f

app.get("/*", (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});