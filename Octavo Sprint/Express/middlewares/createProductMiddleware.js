const {body} = require("express-validator");
const path = require("path");

const createProductMiddleware = [
    body ("marca").notEmpty().withMessage("Debes completar este campo").bail().isLength({min:5}).withMessage("Mínimo 2 caracteres"),
    body ("precio").notEmpty().withMessage("Debes completar este campo").bail().isLength({max:7}).withMessage("Máximo 7 caracteres"),
    body ("stock").notEmpty().withMessage("Debes completar este campo"),
    body ("descripcion").notEmpty().withMessage("Debes completar este campo").bail().isLength({min:20}).withMessage("Mínimo 20 caracteres"),
    body("imagen_producto").custom((value,{req}) => {
        let file =req.file;
        let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    
        if (!file){
          throw new Error ("Debes subir un Imagen")
        } else {
          let fileExtension =path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)){
            throw new Error ("Formatos válidos .JPG .JPEG .PNG .GIF");
          }
        }
        return true;
      }),

      body("id_categoria").custom((value,{req}) => {
        let acceptedCategorias = ["Vino", "Cerveza", "Licor", "Whiskey"];
    
        if (req.body.id_categoria == ""){
          throw new Error ("Debes completar este campo")
        } else { 
           if (!acceptedCategorias.includes(req.body.id_categoria)){
            throw new Error ("Categorias válidas Vino, Cerveza, Licor, Whiskey");
        }
        }
        return true;
      })
  ]

  module.exports = createProductMiddleware