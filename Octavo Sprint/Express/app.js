const express = require('express');
const app = express();
const mainRouter = require("./routes/mainRouter");
const apiRouter = require("./controllers/api/ProductosController")
const methodOverride = require("method-override");
const session = require("express-session");


var cors = require('cors')
app.use(cors())




// Middlewares Globales
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

//cokkies
const cokkies = require("cookie-parser");
const { listarProductos, buscarIdProducto } = require('./controllers/api/ProductosController');
const { listarUsuarios, buscarIdUsuario } = require('./controllers/api/UsuariosController');

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

app.use('/api/productos/:id',buscarIdProducto);
app.use("/api/productos", listarProductos);
app.use('/api/usuarios/:id',buscarIdUsuario);
app.use("/api/usuarios", listarUsuarios);

// app.use("/", mainRouter);

app.listen (3001, () => {console.log ("Servidor Funcionando en puerto 3001");})

app.get("/*", (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});

//agregado para APIS

// const mysql = require ("mysql");
// const db = require("./database/models");
// const Op = db.Sequelize.Op;
// const ProductosController = require("./controllers/api/ProductosController") 

// app.post("/api/productos", (req, res) =>{
//     console.log ()
//     res.send ("HOLA")
// })

// app.use("/", listarProductos)

// const conexion = mysql.createConnection({
//     host:"localhost",
//     database: "drinkhousedb",
//     user: "root",
//     password: "Euvu2428"
// });

// conexion.connect(function(error){
//     if(error){
//         throw error;
//         }else{
//             console.log("Conexion Exitosa") 
//     }
// });
// conexion.end ();