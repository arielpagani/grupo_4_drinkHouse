function guestMiddleware(req, res, next){
    if (!req.session.userLogged){
        return res.redirect("/views/login")
    }
    next();
}

module.exports = guestMiddleware;