function authAdminMiddleware(req, res, next){
    let userLogged = res.locals.userLogged
    if (userLogged.email === 'alexisbello0310@hotmail.com' || userLogged.email === 'emerarg@live.com' ||
    userLogged.email === 'arielpagani@outlook.com' || userLogged.email === 'oteizanacho@gmail.com'){
        return next ();
    }else{
        return res.redirect("/views/profile")
    }  
}

module.exports = authAdminMiddleware;