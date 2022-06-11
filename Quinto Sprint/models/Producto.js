module.exports = function(sequelize, dataTypes){

    let alias = 'Producto';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        categoria: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        marca: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        precio: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        descuento: {
            type: dataTypes.DECIMAL(4, 1).UNSIGNED,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        img: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        stock: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
    }

    let config = {
        /*tableName: 'producto',*/
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);


    return Producto;
}