<<<<<<< HEAD
=======
const path = require("path");
>>>>>>> 1e2792a34eee47f17645320c92e992abbffc4405
const express = require('express');
const app = express();
const mainRouter = require("./routes/mainRouter");
const methodOverride = require("method-override");
<<<<<<< HEAD
const session = require("express-session");

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
=======
const fs = require("fs");
//const sitcoms = fs.readFileSync("sitcoms.txt", utf-8);
>>>>>>> 1e2792a34eee47f17645320c92e992abbffc4405

app.use(methodOverride("_method"));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", mainRouter);

<<<<<<< HEAD
app.listen (3000, () => {console.log ("Servidor Funcionando en puerto 3000");})
=======
app.listen (3030, () => {console.log ("Servidor Funcionando");})
>>>>>>> 1e2792a34eee47f17645320c92e992abbffc4405

app.get("/*", (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});