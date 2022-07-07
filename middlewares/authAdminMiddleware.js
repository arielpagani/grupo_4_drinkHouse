function authAdminMiddleware(req, res, next){
    let userLogged = res.locals.userLogged
    
    if (userLogged.administrador === true){
        return next ();
    }
    return res.redirect("profile")  
}

module.exports = authAdminMiddleware;