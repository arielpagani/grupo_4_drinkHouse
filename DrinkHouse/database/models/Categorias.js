module.exports = (sequelize, datatypes) => {
    let alias = "Categorias";
    let cols = {
        id_categoria:{
            type:datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type:datatypes.STRING(45)
        },
        descripcion:{
            type:datatypes.STRING(150)
        }
    };
    let config = {
        tableName: "categorias", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
        timestamps: false
    }

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate =  function(models){
    Categoria.hasMany(models.Productos,{
        foreignKey:"id_categoria"
    })
    };

    return Categoria;
}