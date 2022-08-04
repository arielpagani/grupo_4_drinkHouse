module.exports = (sequelize, datatypes) => {
    let alias = "Productos";
    let cols = {
        id_producto:{
            type:datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca:{
            type:datatypes.STRING(45)
        },
        precio:{
            type:datatypes.DECIMAL(9,2)
        },
        descuento:{
            type:datatypes.INTEGER
        },
        descripcion:{
            type:datatypes.STRING(250)
        },
        imagen_producto:{
            type:datatypes.STRING(100)
        },
        stock:{
            type:datatypes.INTEGER
        },
        id_categoria:{
            type:datatypes.INTEGER,
            ForeignKey:true
        },
    };
    let config = {
        tableName: "productos", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate =  function(models){
        Producto.belongsTo(models.Categorias,{
            foreignKey:"id_categoria"
        });
        };
    
    return Producto;
}