const express = require('express');
const app = express();

var cors = require('cors')
app.use(cors())

const { listarProductos, buscarIdProducto } = require('./controllers/api/ProductosController');
const { listarUsuarios, buscarIdUsuario } = require('./controllers/api/UsuariosController');
const { listarOrdenes, ordenesProductos, listado } = require('./controllers/api/OrdenesController');

app.use('/api/ordenes/listar', listado);
app.use('/api/ordenes/:id', ordenesProductos);
app.use('/api/ordenes', listarOrdenes);

app.use('/api/productos/:id',buscarIdProducto);
app.use("/api/productos", listarProductos);
app.use('/api/usuarios/:id',buscarIdUsuario);
app.use("/api/usuarios", listarUsuarios);

app.listen (3001, () => {console.log ("Servidor Funcionando en puerto 3001");})

app.get("/*", (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
