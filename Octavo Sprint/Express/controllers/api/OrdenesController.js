const db = require("../../database/models");

module.exports = {
  listarOrdenes: (req, res) => {
    db.Ordenes.findAll().then((ordenes) => {
      return res.json(ordenes);
    });
  },
  ordenesProductos: (req, res) => {
    db.Ordenes_productos.findAll({
      where: { id_producto: req.params.id },
    }).then((orden) => {
      return res.json(orden);
    });
  },
  listado: (req,res) => {
    db.Ordenes_productos.findAll().then(orden =>{
      let id = orden.id_producto;
      db.Productos.findByPk(id).then(producto =>{
        return res.json(producto)
      })
    })
  }


}
