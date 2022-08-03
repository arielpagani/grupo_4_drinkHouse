const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  listarProductos: (req, res) => {
    db.Productos.findAll().then((productos) => {
      db.Categorias.findAll().then(
        (categoria) => {
          let newArray = [];
          let contador = [0, 0, 0, 0, 0];
          for (let i = 0; i < productos.length; i++) {
            contador[productos[i].dataValues.id_categoria] += 1;
            newArray.push({
              id: productos[i].dataValues.id_producto,
              name: productos[i].dataValues.marca,
              description: productos[i].dataValues.descripcion,
              detail: "/api/productos/" + productos[i].dataValues.id_producto,
              categoria: productos[i].dataValues.id_categoria,
              array: categoria[productos[i].dataValues.id_categoria-1].dataValues,
            });
          }
          let respuesta = {
            count: productos.length,
            countByCategory: {
              Cervezas: contador[3],
              Whiskeys: contador[4],
              Licores: contador[2],
              Vinos: contador[1],
            },
            products: newArray,
          };
          return res.json(respuesta);
        }
      );
    });
  },
  buscarIdProducto: (req, res) => {
    db.Productos.findByPk(req.params.id).then((producto) => {
      db.Ordenes_productos.findAll({
        where: { id_producto: req.params.id },
      }).then((orden) => {
        let respuesta = {
          array: orden,
          ...producto.dataValues,
        };
        return res.json(respuesta);
      });
    });
  },
};
