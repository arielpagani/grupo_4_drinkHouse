module.exports = (sequelize, datatypes) => {
    let alias = "Productos";
    let cols = {
        id_producto:{
            type:datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_categoria:{
            type:datatypes.INTEGER,
            ForeignKey:true
        },
        marca:{
            type:datatypes.VARCHAR(45)
        },
        precio:{
            type:datatypes.DECIMAL(9,2)
        },
        descuento:{
            type:datatypes.INTEGER
        },
        descripcion:{
            type:datatypes.VARCHAR(250)
        },
        imagen_producto:{
            type:datatypes.VARCHAR(100)
        },
        stock:{
            type:datatypes.INTEGER
        },
    };
    let config = {
        tableName: "Productos", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config); 

    return Producto;
}