const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    listarProductos: (req, res) => {
        db.Productos.findAll ()
        .then(productos => {
            return res.json (productos)
        })
    }
}