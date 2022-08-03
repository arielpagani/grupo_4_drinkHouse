const db = require('../database/models');

const Ordenes = db.Ordenes;

let ordenesController = {

    crear: function(req,res) {
        res.render('crearOrden')
    },

    guardado: function(req,res){

        Ordenes.create({
            id_orden: req.body.id_orden,
            id_usuario: req.body.id_cliente,
            monto: req.body.monto,
            direccion_envio: req.body.direccion_envio,
            fecha_orden: req.body.fecha_orden,
            estado_orden: req.body.estado_orden
        })
        return res.redirect('/crearOrden');
    }
}

module.exports = ordenesController;