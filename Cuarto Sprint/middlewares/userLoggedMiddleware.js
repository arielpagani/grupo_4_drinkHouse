const User = require('../models/User'); /// Me traigo todos los usuarios.

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = true;

    if (req.session.userLogged) {
		res.locals.isLogged = false;
		res.locals.userLogged = req.session.userLogged;
	}

    let emailInCookie = req.cookies.userEmail;
	let userFromCookie = User.findByField('email', emailInCookie);

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}


    next();
}

module.exports = userLoggedMiddleware;