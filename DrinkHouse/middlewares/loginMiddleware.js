const {body} = require("express-validator");

const loginMiddleware = [
    body ("email").notEmpty().withMessage("Tienes que escribir un Usuario").bail().isLength({min:2}).withMessage("Mínimo 2 caracteres"),
    body ("password").notEmpty().withMessage("Tienes que escribir un Password").bail().isLength({min:5}).withMessage("Mínimo 8 caracteres"),
  ]

  module.exports = loginMiddleware