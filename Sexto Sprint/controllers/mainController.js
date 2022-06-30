//Requiero el modulo path y declaro una variable para traer los articulos.
//instalo el metodo override con "npm install method-override", lo requiero y utilizo con app.use.
//Requiero el modulo fs para traer el paquete file system.

const fs = require("fs");
const path = require("path");
const {validationResult}= require("express-validator")
const bcryptjs =require("bcryptjs")
const db = require("../database/models");
const { Sequelize } = require("../database/models");
const {Op} = require("sequelize");

//CONTROLADOR DE HOME, FUNCIONANDO CON LA BASE DE DATOS
const home = (req, res) => {
    db.Productos.findAll({order:Sequelize.literal("rand()"), limit:4,include: [{model: db.Categorias}]})  
        .then(function(productos) {
            res.render("home", {productos})
    })
};

//CONTROLADOR DE CATEGORIAS, FUNCIONANDO CON LA BASE DE DATOS
const categoria = (req,res) => {
    const categoria = req.params.id_categoria
        if (categoria != 'catalogo') {
            db.Productos.findAll({
                where:{
                    id_categoria: categoria
                }                
            }).then(function(productos) {
                res.render("categoria", {productos})   
        })
    } db.Productos.findAll({order:[["id_categoria","ASC"]]})
        .then(function(productos) {
            res.render("categoria", {productos})       
    })
    // return res.render("categoria", {arreglo:articulos, url:req.params.categoria});
}

const carritoCompras = (req, res) => {
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));
    let compras = articulos [2];
    res.render ("carritoCompras", {arreglo:compras});
}

//CONTROLADOR DE DETALLE DE PRODUCTO, FUNCIONANDO CON LA BASE DE DATOS
const productDetail = (req, res) => {
    db.Productos.findByPk(req.params.id_producto, {include: [{model: db.Categorias}]})
        .then(function(productos) {
            db.Productos.findAll({limit:4,order:[Sequelize.literal("rand()")],
                // le pido que busque a los de la misma categoria y que excluya al seleccionado con un limite de 4 productos.
                where : {
                    [Op.and]: [{ id_categoria: productos.id_categoria }, { id_producto: { [Op.ne]: req.params.id_producto }}]}})
                    // order:{Sequelize.literal("rand()")},{limit:4}})
                    .then(function(similares) {
                    res.render("productDetail", {productos, similares})   
        })
    })
}

const mainController = {
    home,
    carritoCompras,
    productDetail,
    categoria,
};

module.exports = mainController