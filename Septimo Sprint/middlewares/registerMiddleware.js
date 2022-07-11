const {body} = require("express-validator");
const path = require("path");

const registerMiddleware = [
    body ("nombre").notEmpty().withMessage("Tienes que escribir un Nombre"),
    body ("apellido").notEmpty().withMessage("Tienes que escribir un Apellido"),
    body ("email").notEmpty().withMessage("Tienes que escribir un Email").bail().isEmail().withMessage("Formato de email inválido"),
    body ("direccion").notEmpty().withMessage("Tienes que escribir una dirección"),
    body ("telefono").notEmpty().withMessage("Tienes que escribir un teléfono"),
    body ("fecha_de_nacimiento").notEmpty().withMessage("Tienes que escribir una fecha"),
    body ("password").notEmpty().withMessage("Tienes que escribir un Password"),

    // esto funcionaba pero dejo de funcionar A REVISAR.
    body("avatar").custom((value,{req}) => {
      let file =req.file;
      let acceptedExtensions = [".jpg", ".png", ".gif"];
  
      if (!file){
        throw new Error ("Tienes que subir un Avatar")
      } else {
        let fileExtension =path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)){
          throw new Error ("Las extensiones permitidas son .jpg .png .gif");
        }
      }
      return true;
    })
  ]

  module.exports = registerMiddleware