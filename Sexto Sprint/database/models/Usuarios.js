module.exports = (sequelize, datatypes) => {
    let alias = "Usuarios";
    let cols = {
        id_usuario:{
            type:datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type:datatypes.STRING(45)
        },
        apellido:{
            type:datatypes.STRING(45)
        },
        email:{
            type:datatypes.STRING(70)
        },
        fecha_de_nacimiento:{
            type:datatypes.DATE
        },
        telefono:{
            type:datatypes.STRING(45)
        },
        direccion:{
            type:datatypes.STRING(150)
        },
        avatar:{
            type:datatypes.STRING(100)
        },
        administrador:{
            type:datatypes.BOOLEAN
        },
        password:{
            type:datatypes.STRING(200)
        },
    };
    let config = {
        tableName: "usuarios", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate =  function(models){
        Usuario.belongsTo(models.Ordenes,{
            foreignKey:"id_usuario"
        });
        };
    
    return Usuario;
}