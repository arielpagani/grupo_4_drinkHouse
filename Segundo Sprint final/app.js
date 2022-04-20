const path = require("path");
const express = require('express');
const app = express();
const mainRouter = require("./routes/mainRouter");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", mainRouter);

app.use("/views/productDetail", mainRouter);

app.use("/views/product", mainRouter);

app.use("/views/login", mainRouter);

app.use("/views/register", mainRouter);

app.use("/views/catalogo", mainRouter);

app.listen (3000, () => {console.log ("Servidor Funcionando");})

app.get("/*", (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});