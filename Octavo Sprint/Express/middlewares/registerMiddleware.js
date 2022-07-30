const {body} = require("express-validator");
const path = require("path");

const registerMiddleware = [
    body ("nombre").notEmpty().withMessage("Tienes que escribir un Nombre").bail().isLength({min:2}).withMessage("Mínimo 2 caracteres"),
    body ("apellido").notEmpty().withMessage("Tienes que escribir un Apellido").bail().isLength({min:2}).withMessage("Mínimo 2 caracteres"),
    body ("email").notEmpty().withMessage("Tienes que escribir un Email").bail().isEmail().withMessage("Formato de email inválido"),
    body ("direccion").notEmpty().withMessage("Tienes que escribir una dirección"),
    body ("telefono").notEmpty().withMessage("Tienes que escribir un teléfono"),
    body ("fecha_de_nacimiento").notEmpty().withMessage("Tienes que escribir una fecha"),
    body ("password").notEmpty().withMessage("Tienes que escribir un Password").bail().isLength({min:8}).withMessage("Mínimo 8 caracteres"),
    body("avatar").custom((value,{req}) => {
      let file =req.file;
      let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  
      if (!file){
        throw new Error ("Tienes que subir un Avatar")
      } else {
        let fileExtension =path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)){
          throw new Error ("Formatos válidos .JPG .JPEG .PNG .GIF");
        }
      }
      return true;
    })
  ]

  module.exports = registerMiddleware