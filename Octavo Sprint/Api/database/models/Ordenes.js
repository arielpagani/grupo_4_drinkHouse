module.exports = (sequelize, datatypes) => {
    let alias = "Ordenes";
    let cols = {
        id_orden:{
            type:datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario:{
            type:datatypes.INTEGER,
            ForeignKey:true
        },
        monto:{
            type:datatypes.DECIMAL(9,2)
        },
        direccion_envio:{
            type:datatypes.STRING(150)
        },
        fecha_orden:{
            type:datatypes.DATE
        },
        estado_orden:{
            type:datatypes.STRING(45)
        }
    };
    let config = {
        tableName: "ordenes", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
        timestamps: false
    }

    const Orden = sequelize.define(alias, cols, config);

    Orden.associate =  function(models){
        Orden.hasMany(models.Usuarios,{
            foreignKey:"id_usuario"
        });
        };
    
    return Orden;
}