module.exports = function(sequelize, dataTypes){

    let alias = 'Usuario';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        fechaDeNacimiento: {
            type: dataTypes.DATE
        },
        avatar: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'usuarios',
        timestamps: false
    }

    let Usuario = sequelize.define(alias, cols, config);


    return Usuario;
}