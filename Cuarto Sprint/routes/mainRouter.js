const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
<<<<<<< HEAD
const multer = require("multer");
const path = require("path");

//como indicamos para subir el archivo, nombre y donde guardarlo
=======
const userController = require("../controllers/userController");
const multer = require("multer");
const path = require("path");


//Declaración de los Middlewares de Ruta.
const registerMiddleware = require("../middlewares/registerMiddleware"); //Middleware para mostrar errores en el Registro .
const guestMiddleware = require("../middlewares/guestMiddleware"); //Middleware que me direcciona al profile si ya estoy logueado y quiero entrar al login o a register.
const authMiddleware = require("../middlewares/authMiddleware"); //Middleware que no me deja ingresar al profile si no estoy registrado.
const authAdminMiddleware = require("../middlewares/authAdminMiddleware"); //Middleware para autorizar ingreso de admin.

//como indicamos para subir la imagen de producto, nombre y donde guardarlo
>>>>>>> 12ac4be43f846cc1246d1e9f62c0a725491e4d0f
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../public/images/ArticulosCreados"))
    },
    filename: function (req, file, cb) {
      cb(null, "nuevo"+Date.now()+path.extname(file.originalname))
  }
})

<<<<<<< HEAD
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

=======
//como indicamos para subir el Avatar, nombre y donde guardarlo
const storageAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../public/images/Avatares"))
  },
  filename: function (req, file, cb) {
    cb(null, "nuevo"+Date.now()+path.extname(file.originalname))
}
})

// Donde se guarda la imagen de Producto
const upload = multer({storage})
//Donde se guarda el Avatar del usuario
const uploadAvatar = multer({storage:storageAvatar})

// Ruta a Home
router.get("/", mainController.home);

// Ruta a Register
router.get("/views/register", guestMiddleware, userController.register);
router.post("/views/register", uploadAvatar.single("avatar"),registerMiddleware,userController.processRegister);

// Ruta a Login
router.get("/views/login", guestMiddleware,userController.login);
router.post("/views/login", userController.loginProcess);

// Ruta a Profile
router.get("/views/profile", authMiddleware, userController.profile);

// Ruta para Cerrar session
router.get("/views/logout", userController.logout);

// Ruta para ver productos por categoria
router.get("/views/product/:categoria", mainController.categoria);

// Ruta para ver el detalle del producto seleccionado
router.get("/views/productDetail/:codigo", mainController.productDetail);

// Ruta para ingresar al CRUD como administrador
router.get("/views/administrador",authMiddleware,authAdminMiddleware,mainController.administrador);

// Ruta Creacion de Productos
router.get("/views/createProducts", mainController.createProducts);
router.post("/views/createProducts", upload.single("imagen"), mainController.save);

// Ruta Editar Productos
router.get("/administrador/:codigo/editproducts",authAdminMiddleware, mainController.editProducts);
router.put("/administrador/:codigo/editproducts", upload.single("imagen"), mainController.putProducts);

// Ruta Eliminar Productos
router.get("/administrador/eliminarProduct/:codigo", mainController.eliminarProduct);

// Ruta para ver el carrito de Compras
router.get("/views/carritoCompras", mainController.carritoCompras);
>>>>>>> 12ac4be43f846cc1246d1e9f62c0a725491e4d0f

module.exports = router;