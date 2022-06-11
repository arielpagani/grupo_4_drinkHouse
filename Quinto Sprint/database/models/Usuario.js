module.exports = function(sequelize, dataTypes){

    let alias = 'Usuario';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        birth: {
            type: dataTypes.DATE
        },
        avatar: {
            type: dataTypes.STRING
        },
    }

    let config = {
        tableName: 'usuarios',
        timestamps: false
    }

    let Usuario = sequelize.define(alias, cols, config);


    return Usuario;
}