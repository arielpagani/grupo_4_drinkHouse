const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  listarUsuarios: (req, res) => {
    db.Usuarios.findAll().then((usuarios) => {
      let newArray = [];
      for (let i = 0; i < usuarios.length; i++) {
        newArray.push({
          id: usuarios[i].dataValues.id_usuario,
          name: usuarios[i].dataValues.nombre + ' ' + usuarios[i].dataValues.apellido,
          email: usuarios[i].dataValues.email,
          detail: "/api/usuarios/" + usuarios[i].dataValues.id_usuario
        });
      }
      let respuesta = {
        count: usuarios.length,
        users: newArray,
      };
      return res.json(respuesta);
    });
  },
  buscarIdUsuario: (req, res) => {
    db.Usuarios.findByPk(req.params.id)
    .then((usuario) => {
      let respuesta = {
        id: usuario.dataValues.id_usuario,
        nombre: usuario.dataValues.nombre,
        apellido: usuario.dataValues.apellido,
        email: usuario.dataValues.email,
        fechaDeNacimiento: usuario.dataValues.fecha_de_nacimiento,
        telefono: usuario.dataValues.telefono,
        direccion: usuario.dataValues.direccion,
        avatar: usuario.dataValues.avatar
      }
      return res.json(respuesta);
    });
  },
};
