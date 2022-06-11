module.exports = function(sequelize, dataTypes){

    let alias = 'Producto';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING
        },
        categoria: {
            type: dataTypes.STRING
        },
        marca: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER
        },
        descuento: {
            type: dataTypes.INTEGER
        },
        descripcion: {
            type: dataTypes.STRING
        },
        img: {
            type: dataTypes.STRING
        },
        stock: {
            type: dataTypes.INTEGER
        },
    }

    let config = {
        tableName: 'productos',
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);


    return Producto;
}