module.exports = function(sequelize, dataTypes){

    let alias = 'Producto';

    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.STRING
        },
        brand: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.INTEGER
        },
        desciption: {
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
        tableName: 'products',
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);


    return Producto;
}