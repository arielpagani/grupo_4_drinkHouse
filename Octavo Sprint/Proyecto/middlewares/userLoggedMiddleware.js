const db = require('../database/models');
const usuariosController = require("../controllers/usuariosController");
const Usuarios = db.Usuarios;

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;
	res.locals.isAdmin = false;

	let userFromCookie = req.cookies.userEmail

	if (userFromCookie){
		console.log("buscando la Cookie "+ userFromCookie)
		Usuarios.findOne({
			where:{
				email:userFromCookie
			}
		})
		.then(function(usuario) {
			// console.log("encontro al usuario "+ usuario.id_usuario)
			if (usuario) {
				if (req.session) {
					req.session.userLogged = usuario
				} 
			}
		})
	}
    let userLogged = req.session.userLogged;
	// console.log ("guardando en la sesion al usuario "+ userLogged)
    if (userLogged) {
        res.locals.isAdmin = userLogged.adminstrador;
		res.locals.isLogged = true;
		res.locals.userLogged = userLogged;
	}
    next();
}

module.exports = userLoggedMiddleware;