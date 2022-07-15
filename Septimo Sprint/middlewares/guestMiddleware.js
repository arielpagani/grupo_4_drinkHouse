function guestMiddleware(req, res, next){
    if (req.session.userLogged){
        return res.redirect("/views/profile")
    }
    next();
}

module.exports = guestMiddleware;