const db = require('../database/models');
const usuariosController = require("../controllers/usuariosController");
const Usuarios = db.Usuarios;

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = true;
	res.locals.isAdmin = false;

	// let userFromCookie = req.cookies.userEmail
	// console.log (userFromCookie)
	// Usuarios.findOne({
	// 	where:{
	// 		email:req.cookies.userEmail
	// 	}
	// })
	// .then(function(usuario) {
	// 	if (userFromCookie) {
	// 		// req.session.userLogged = usuario
	// 		// req.session.userLogged = userFromCookie;
	// 	}
	// })

    if (req.session.userLogged) {
		if (userLogged.administrador == true){
        	res.locals.isAdmin = true;
    	}
		res.locals.isLogged = false;
		res.locals.userLogged = req.session.userLogged;
	}
    next();
}

module.exports = userLoggedMiddleware;