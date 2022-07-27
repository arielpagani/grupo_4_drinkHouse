const db = require('../database/models');
const {validationResult}= require("express-validator");

const Productos = db.Productos;
const Categorias = db.Categorias;

let productosController = {
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
        const resultValidation = validationResult(req);
    
                if (resultValidation.errors.length > 0){
                    return res.render("createProducts",{
                        errors: resultValidation.mapped(),
                        oldData:req.body
                    })
                }
        
        if (req.body.id_categoria == "Vino"){
            categoriaSeleccionada = 1
        } else if (req.body.id_categoria == "Licor"){ 
            categoriaSeleccionada = 2
        } else if (req.body.id_categoria == "Cerveza"){ 
            categoriaSeleccionada = 3
        }else{
            categoriaSeleccionada = 4
        }

        Productos.create({
            marca:req.body.marca,
            precio:req.body.precio,
            descuento:req.body.descuento,
            descripcion:req.body.descripcion,
            imagen_producto:"/Images/ArticulosCreados/" + req.file.filename,
            stock:req.body.stock,
            id_categoria:categoriaSeleccionada,
        });
        return res.redirect("/views/administrador");
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
        Productos.findByPk(req.params.id_producto, {include: [{model: Categorias}]})
        .then(function(productos) {
        //si selecciono el checkbox modificar imagen me permite cambiar la imagen sino lo selecciono queda la imagen anterior   
        const imagenActualizada = req.body.cambiar_imagen ? "/Images/ArticulosCreados/" + req.file.filename:productos.imagen_producto;
        

        Productos.update({
            id_categoria:req.body.categoria_seleccionada,
            marca:req.body.marca,
            precio:req.body.precio,
            descuento:req.body.descuento,
            descripcion:req.body.descripcion,
            imagen_producto: imagenActualizada,
            stock:req.body.stock,
            
        },  {
            where:{
                id_producto: req.params.id_producto
            }
        })
        res.redirect("/views/administrador");
    })
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

module.exports = productosController