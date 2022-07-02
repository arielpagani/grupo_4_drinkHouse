const { sequelize } = require('../database/models');
const db = require('../database/models');

{order:[["id_categoria","ASC"]]}

const Productos = db.Productos;
const Categorias = db.Categorias;

let productoController = {
    listar: function (req, res) {
        Productos.findAll({include: [{model: Categorias}]},{order:[["id_categoria","ASC"]]}) // no me ordena ni random ni por categoria REVISAR
        .then(function(productos) {
            res.render("administrador", {productos})
    })
    },
    crear: function (req, res) {
            Categorias.findAll()
            .then(function(categorias){
                res.render("createProducts", {categorias})
            }) 
    },
    guardado: function(req, res) {
        Productos.create({
            marca:req.body.marca,
            precio:req.body.precio,
            descuento:req.body.descuento,
            descripcion:req.body.descripcion,
            imagen_producto:"/Images/ArticulosCreados/" + req.file.filename,
            stock:req.body.stock,
            id_categoria:req.body.categoria_seleccionada,
        });
        res.redirect("/views/administrador");
    },
    editar: function (req, res) {
        Productos.findByPk(req.params.id_producto, {include: [{model: Categorias}]})
        .then(function(productos) {
        Categorias.findAll()
        .then(function(categorias) {
            res.render("editProducts", {productos, categorias})   
        })
    })   
    },
    actualizar: function(req, res) {
        Productos.update({
            marca:req.body.marca,
            precio:req.body.precio,
            descuento:req.body.descuento,
            descripcion:req.body.descripcion,
            imagen_producto:"/Images/ArticulosCreados/" + req.file.filename,
            stock:req.body.stock,
            id_categoria:req.body.categoria_seleccionada
        },  {
            where:{
                id_producto: req.params.id_producto
            }
        })
        res.redirect("/views/administrador");
    },
    borrar: function(req, res) {
        Productos.destroy({
            where:{
                id_producto: req.params.id_producto
            }
        })
        res.redirect("/views/administrador");
    }
}

module.exports = productoController