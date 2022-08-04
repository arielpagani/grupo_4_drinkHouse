const db = require('../database/models');
const bcryptjs =require("bcryptjs");
const {validationResult}= require("express-validator");

const Usuarios = db.Usuarios;

let usuariosController = {

    crear: function (req, res) {
        res.render("register")
    },

    guardado: function(req, res) {
        const resultValidation = validationResult(req)

        Usuarios.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(function(usuario) {
        if (usuario){
            return res.render("register", {
                errors: {
                    email:{
                        msg:"Este usuario ya se encuentra registrado"
                    }
                },
                oldData:req.body
            })
        }
        if (resultValidation.errors.length > 0){
            return res.render("register", {
                errors: resultValidation.mapped(),
                oldData:req.body
            })
        }
        Usuarios.create({
            id_usuario:req.body.usuario,
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email:req.body.email,
            password:bcryptjs.hashSync(req.body.password, 10),
            direccion:req.body.direccion,
            telefono:req.body.telefono,
            fecha_de_nacimiento:req.body.fecha_de_nacimiento,
            avatar:"/Images/Avatares/" + req.file.filename,
        });
    return res.redirect("/views/login");
    })
    },

    listarUsuarios: function (req, res) {
        Usuarios.findAll()
        .then(function(usuarios) {
            res.render("users", {usuarios})
    })
    },        

    buscarIdUsuario: function (req, res) {
        Usuarios.findByPk(req.params.id_usuario)
        .then(function(usuario) {
            res.render("login", {usuario})
        })
    },

    buscarEmail: function (req, res) {
        Usuarios.findAll({
            where:{
                email:req.body.email
            }
        })
        .then(function(usuario) {
            res.render("login", {usuario})
    })
    },

    login: function (req, res) {
        res.render("login")
    },

    loginProcces: function (req, res) {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){
            return res.render("login", {
                errors: resultValidation.mapped(),
                oldData:req.body
            })
        }
        Usuarios.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(function(usuario) {
            
            if (usuario) {
                let passwordValid = bcryptjs.compareSync(req.body.password, usuario.password);
                if (passwordValid) {
                    delete usuario.password; //borro la contraseña
                    req.session.userLogged = usuario;
                    userLogged = usuario;

                    if (req.body.recordar_usuario){
                        res.cookie("userEmail", req.body.email, {maxAge: (1000*60) * 5})
                    }

                    return res.redirect("/views/profile")
                }
                    return res.render ("login", {
                        errors: {
                            password: {
                                msg:"Contraseña Incorrecta"
                            },
                    },
                    oldData:req.body
                });
            }
                    return res.render ("login", {
                        errors: {
                            email: {
                                msg:"El usuario no está registrado"
                            },
                        },
                });
        })
    },

    profile: function (req, res) {
        res.render("userprofile",{
            user: req.session.userLogged
        })
    },

    profileId: function (req, res) {
        Usuarios.findByPk(req.params.id_usuario)
        .then(function(user) {
            res.render("userprofile", {user})
        })
    },

    listarUsuariosPorId: function (req, res) {
        Usuarios.findByPk(req.params.id_usuario)
        .then(function(user) {
            res.render("editUser", {user})
        })
    },

    actualizarUsuarioAdmin: function(req, res) {
        if (req.body.password){
            passwordNew = bcryptjs.hashSync(req.body.password, 10)
        }
        const passwordOld = req.body.passwordOld
            passwordNew = passwordOld
        
        Usuarios.update({
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            telefono:req.body.telefono,
            direccion:req.body.direccion,
            avatar:"/Images/Avatares/" + req.file.filename,
            administrador: req.body.administrador,
            password:passwordNew,
        },  {
            where:{
                id_usuario: req.params.id_usuario
            }
        })
        res.redirect("/views/usuarios");
    },

    borrarCuenta: function(req, res) {
        Usuarios.destroy({
            where:{
                id_usuario: req.params.id_usuario
            }
        })
        res.redirect("/views/usuarios");
    },

    logout: function (req, res) {
        res.clearCookie("userEmail"); // Destruyo la cookie que recuerda usuario.
        req.session.destroy(); // Destruye la session.
        return res.redirect("/");
    }
}

module.exports = usuariosController