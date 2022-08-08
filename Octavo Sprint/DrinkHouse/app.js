const express = require('express');
const app = express();
const mainRouter = require("./routes/mainRouter");
const methodOverride = require("method-override");
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

app.use(methodOverride("_method"));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", mainRouter);

app.listen (3002, () => {console.log ("Servidor Funcionando en puerto 3002");})

app.get("/*", (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});