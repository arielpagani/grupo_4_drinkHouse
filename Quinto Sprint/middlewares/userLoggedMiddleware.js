const User = require('../models/User'); /// Me traigo todos los usuarios.

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = true;
	res.locals.isAdmin = false;
	let userLogged = req.session.userLogged;
    if (req.session.userLogged) {
		if (userLogged.email === 'alexisbello0310@hotmail.com' || userLogged.email === 'emerarg@live.com' ||
    		userLogged.email === 'arielpagani@outlook.com' || userLogged.email === 'oteizanacho@gmail.com'){
        	res.locals.isAdmin = true;
    	}
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