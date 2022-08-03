module.exports = (sequelize, datatypes) => {
    let alias = 'Ordenes_productos';
    let cols ={
        id:{
            type:datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_orden:{
            type:datatypes.INTEGER,
        },
        id_producto:{
            type:datatypes.INTEGER,
            ForeignKey:true
        },
        cantidad:{
            type:datatypes.INTEGER
        }
    };
    let config = {
        tableName: 'ordenes_productos',
        timestamps: false
    }

    const Ordenes_productos = sequelize.define(alias, cols, config);

    //Ordenes_productos.associate = function(models){
        //Ordenes_productos.belongsTo(models.Producto,{
            //foreignKey: 'id_producto'
        //});
    //};

    return Ordenes_productos;
}