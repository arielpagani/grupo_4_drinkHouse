module.exports = (sequelize, datatypes) => {
    let alias = 'Categorias_productos';
    let cols ={
        id:{
            type:datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_categoria:{
            type:datatypes.INTEGER,
        },
        id_producto:{
            type:datatypes.INTEGER,
        },
        cantidad:{
            type:datatypes.INTEGER,
        }
    };
    let config = {
        tableName: 'categorias_productos',
        timestamps: false
    }

    const Categorias_productos = sequelize.define(alias, cols, config);

    return Categorias_productos;
}