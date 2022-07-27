const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    listarUsuarios: (req, res) => {
        db.Usuarios.findAll ()
        .then(usuarios => {
            return res.json (usuarios)
        })
    }
}