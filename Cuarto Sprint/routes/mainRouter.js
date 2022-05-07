const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const multer = require("multer");
const path = require("path");

//como indicamos para subir el archivo, nombre y donde guardarlo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../public/images/ArticulosCreados"))
    },
    filename: function (req, file, cb) {
      cb(null, "nuevo"+Date.now()+path.extname(file.originalname))
  }
})

const upload = multer({ storage})

router.get("/", mainController.home);

router.get("/views/login", mainController.login);

router.get("/views/product/:categoria", mainController.categoria);

router.get("/views/productDetail/:codigo", mainController.productDetail);

router.get("/views/register", mainController.register);

router.get("/views/administrador",mainController.administrador);

router.get("/views/createProducts", mainController.createProducts);
router.post("/views/createProducts", upload.single("imagen"), mainController.save);

router.get("/administrador/:codigo/editproducts", mainController.editProducts);
router.put("/administrador/:codigo/editproducts", upload.single("imagen"), mainController.putProducts);

router.get("/views/carritoCompras", mainController.carritoCompras);

router.get("/administrador/eliminarProduct/:codigo", mainController.eliminarProduct);


module.exports = router;