const express = require("express");

const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.home);

router.get("/views/catalogo", mainController.catalago);

router.get("/views/login", mainController.login);

router.get("/views/product", mainController.product);

router.get("/views/productDetail", mainController.productDetail);

router.get("/views/register", mainController.register);

module.exports = router;