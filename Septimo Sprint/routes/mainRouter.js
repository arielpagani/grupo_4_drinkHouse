const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const productosController = require("../controllers/productosController");
const usuariosController = require("../controllers/usuariosController");
const multer = require("multer");
const path = require("path");

//Declaración de los Middlewares de Ruta.
const registerMiddleware = require("../middlewares/registerMiddleware"); //Middleware para mostrar errores en el Registro.
const loginMiddleware = require("../middlewares/loginMiddleware"); //Middleware para mostrar errores en el Login.
const createProductMiddleware = require("../middlewares/createProductMiddleware"); //Middleware para mostrar errores en la creacion de productos.
const guestMiddleware = require("../middlewares/guestMiddleware"); //Middleware que me direcciona al profile si ya estoy logueado y quiero entrar al login o a register.
const authMiddleware = require("../middlewares/authMiddleware"); //Middleware que no me deja ingresar al profile si no estoy registrado.
const authAdminMiddleware = require("../middlewares/authAdminMiddleware"); //Middleware para autorizar ingreso de admin.

//como indicamos para subir la imagen de producto, nombre y donde guardarlo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../public/Images/ArticulosCreados"))
    },
    filename: function (req, file, cb) {
      cb(null, "nuevo"+Date.now()+path.extname(file.originalname))
  }
})

//como indicamos para subir el Avatar, nombre y donde guardarlo
const storageAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../public/Images/Avatares"))
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
router.get("/views/register", usuariosController.crear);
router.post("/views/register", uploadAvatar.single("avatar"),registerMiddleware,usuariosController.guardado);

// Ruta a Login
router.get("/views/login", guestMiddleware,usuariosController.login);
router.post("/views/login", loginMiddleware, usuariosController.loginProcces);

// Ruta a Profile
router.get("/views/profile", authMiddleware, usuariosController.profile);
router.get("/views/profile/:id_usuario", authMiddleware, usuariosController.profileId);

// Ruta para Cerrar session
router.get("/views/logout",authMiddleware, usuariosController.logout);

// Ruta para ver productos por categoria
router.get("/views/product/:id_categoria", mainController.categoria);

// Ruta para ver el detalle del producto seleccionado
router.get("/views/productDetail/:id_producto", mainController.productDetail);

// Ruta para ingresar al CRUD como administrador
router.get("/views/administrador",authMiddleware, authAdminMiddleware, productosController.listar);

// Ruta para ingresar a la vista de todos los usuarios
router.get("/views/usuarios",authMiddleware,authAdminMiddleware,usuariosController.listarUsuarios);
router.get("/views/usuarios/:id_usuario", authMiddleware,authAdminMiddleware,usuariosController.listarUsuariosPorId);
router.post("/views/usuarios/:id_usuario/editUsuario", uploadAvatar.single("avatar"),authMiddleware,authAdminMiddleware,usuariosController.actualizarUsuarioAdmin);
router.post("/views/borrar/:id_usuario", authMiddleware,authAdminMiddleware,usuariosController.borrarCuenta);

// Ruta Creacion de Productos
router.get("/views/createProducts", productosController.crear);
router.post("/views/createProducts", upload.single("imagen_producto"), createProductMiddleware, productosController.guardado);

// Ruta Editar Productos
router.get("/administrador/:id_producto/editproducts",authAdminMiddleware, productosController.editar);
router.put("/administrador/:id_producto/editproducts", upload.single("imagen_producto"), productosController.actualizar);

// Ruta Eliminar Productos
router.post("/administrador/borrar/:id_producto", productosController.borrar);

// Ruta para ver el carrito de Compras
router.get("/views/carritoCompras", mainController.carritoCompras);

module.exports = router;