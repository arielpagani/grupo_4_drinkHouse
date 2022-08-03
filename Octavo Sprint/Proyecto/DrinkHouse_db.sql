CREATE DATABASE  IF NOT EXISTS `drinkhousedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `drinkhousedb`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: drinkhousedb
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `id_categoria_UNIQUE` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Vino','El vino es una bebida hecha de uva, mediante la fermentación alcohólica de su zumo.'),(2,'Licor','El licor es una bebida alcohólica obtenida por maceración en aguardiente de hierbas o frutos, con una riqueza en azúcares superior a 100 gramos/litro.'),(3,'Cerveza','La cerveza es una bebida alcohólica, que se fabrica con granos de cebada germinados cuyo almidón se fermenta y se aromatiza a menudo con lúpulo.'),(4,'Whiskey','El whiskey es una bebida alcohólica obtenida por la destilación de la malta y su posterior añejamiento en barriles de madera.');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordenes` (
  `id_orden` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `monto` decimal(9,2) NOT NULL,
  `direccion_envio` varchar(150) NOT NULL,
  `fecha_orden` date NOT NULL,
  `estado_orden` varchar(45) NOT NULL,
  PRIMARY KEY (`id_orden`),
  UNIQUE KEY `id_orden_UNIQUE` (`id_orden`),
  KEY `id_usuario_idx` (`id_usuario`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordenes`
--

LOCK TABLES `ordenes` WRITE;
/*!40000 ALTER TABLE `ordenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordenes_productos`
--

DROP TABLE IF EXISTS `ordenes_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordenes_productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_orden` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_producto_idx` (`id_producto`),
  KEY `id_orden_idx` (`id_orden`),
  CONSTRAINT `id_orden` FOREIGN KEY (`id_orden`) REFERENCES `ordenes` (`id_orden`),
  CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordenes_productos`
--

LOCK TABLES `ordenes_productos` WRITE;
/*!40000 ALTER TABLE `ordenes_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordenes_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(45) NOT NULL,
  `precio` decimal(9,2) NOT NULL,
  `descuento` int DEFAULT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  `imagen_producto` varchar(100) NOT NULL,
  `stock` int NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_producto`),
  UNIQUE KEY `id_producto_UNIQUE` (`id_producto`),
  KEY `id_categoria_fk_idx` (`id_categoria`),
  CONSTRAINT `id_categoria_fk` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Norton',700.00,5,'Sexy Fish Cabernet Franc es el nuevo vino de bodega Norton, muy frutado, facil de tomar, ideal para acompañar carnes rojas asadas y picadas de quesos blandos.','/Images/ArticulosCreados/nuevo1656300095064.png',100,1),(2,'Rutini',1100.00,5,'Rojo rubí profundo. El dúo de cepas de origen francés da como resultado un tinto armonioso y equilibrado.','/Images/ArticulosCreados/nuevo1656300350131.png',100,1),(3,'Ruca Malen',480.00,5,'De color rojo violáceo con destellos azules. Respirás su frescura y te envuelve en aromas de frutos rojos, intensas violetas, chocolate y vainilla.','/Images/ArticulosCreados/nuevo1656300421740.jpg',100,1),(4,'Benjamin',500.00,5,'Aroma a romas y ciruela madura y mermelada de frutos rojos.','/Images/ArticulosCreados/nuevo1656300457285.jpg',100,1),(5,'Stella Artoise',115.00,5,'Tradición y excelencia. De destacado aroma a lúpulo y amargor, su sabor intenso es disfrutado en todo el mundo.','/Images/ArticulosCreados/nuevo1656300550738.jpg',100,3),(6,'Temple',125.00,5,'Cerveza rubia artesanal con una graduación alcohólica de 5,8%, de sabor intenso y cuerpo espeso','/Images/ArticulosCreados/nuevo1656300585197.jpg',100,3),(7,'Brahma',95.00,5,'Cerveza rubia con una graduación alcohólica de 4,8%, de sabor suave y cuerpo liviano.','/Images/ArticulosCreados/nuevo1656300620040.jpg',100,3),(8,'Andes Origen',145.00,5,'Cerveza negra. Una cerveza pensada para aquellas personas que valoran su tiempo libre, para quienes disfrutan de los pequeños momentos de la vida.','/Images/ArticulosCreados/nuevo1656300658978.jpg',100,3),(9,'Johnnie Walker',10500.00,5,'Johnnie Walker recrea el sabor de los whiskies del siglo XIX. Contiene algunos de los whiskies más raros y excepcionales de las reservas de la familia.','/Images/ArticulosCreados/nuevo1656300745932.jpg',100,4),(10,'Bulleit Bourbon',6800.00,5,'Bulleit Bourbon es un whiskey americano que se produce y embotella en Kentucky, USA. Conocido por su alto contenido de centeno y maíz.','/Images/ArticulosCreados/nuevo1656300899432.jpg',100,4),(11,'Old Parr',4200.00,5,'Un Whiskys Blend de 12 años de añejamiento y ofrece un sabor lleno de carácter. Se desataca por su distintiva botella con textura craquelada.','/Images/ArticulosCreados/nuevo1656300849971.jpg',100,4),(12,'Vat 69',680.00,5,'El whisky escoces creado hace más de 100 años por William Sanderson, lanza sus variantes infusionadas con especias. Tómalos solos o con gaseosa cola.','/Images/ArticulosCreados/nuevo1656301047061.jpg',100,4),(13,'Sheridan',3800.00,5,'Sheridan es una opción magnífica en lo que licores se refiere. Tiene la medida justa para lograr un trago excepcional, similar al café Irlandés.','/Images/ArticulosCreados/nuevo1656301225282.jpg',100,2),(14,'Baileys',2900.00,5,'Baileys Original es un licor de crema irlandesa, la base del licor es un blend de Whiskys irlandés cuya receta es secreta.','/Images/ArticulosCreados/nuevo1656301284801.jpg',100,2),(15,'Legui',550.00,5,'Legui es un licor fino argentino extraído de la caña de azúcar, macerado en alcohol. Es de producción 100% argentina.','/Images/ArticulosCreados/nuevo1656301356186.jpg',100,2),(16,'Baileys Salted',3700.00,5,'Baileys Salted Caramel con una sensación sedosa, suave y deliciosa de la crema mezclada con el whiskey, un verdadero placer.','/Images/ArticulosCreados/nuevo1656301961699.jpg',100,2),(17,'Andes Origen',212.00,5,'Cerveza elaborada con 100% de malta y mosto de uva tinta fermentada de la vendimia mendocina. Un gustito dulce y frutal, de gran cuerpo y espuma persistente.','/Images/ArticulosCreados/nuevo1656537228654.jpg',100,3),(18,'Patagonia',262.00,5,'Cerveza tipo Belgian Witbier con trigo de cremosidad característica. En su aroma predomina la cáscara de naranja y el coriandro.','/Images/ArticulosCreados/nuevo1656537266665.jpg',100,3),(19,'Patagonia',262.00,5,'Cerveza de un suave sabor a caramelo, elaborada con una combinación de 4 maltas, que le dan su característico color ámbar y sabor maltoso, dejando un sutil dulzor en boca.','/Images/ArticulosCreados/nuevo1656537412063.jpg',100,3),(20,'Andes Origen',212.00,5,'Esta rica cerveza, de receta mendocina, reúne ingredientes de dos de las grandes favoritas de Andes Origen: Roja e Ipa Andina.','/Images/ArticulosCreados/nuevo1656537449338.jpg',100,3),(21,'Temple',290.00,5,'Temple te presenta una birra para toda la humanidad. Una lager lupulada, aromática, fresca y de bajo amargor.','/Images/ArticulosCreados/nuevo1656537477862.jpg',100,3),(22,'Stella Artoise',238.00,5,'Cerveza negra premium, de espuma cremosa y color negro intenso.','/Images/ArticulosCreados/nuevo1656537502932.jpg',100,3),(23,'Temple',290.00,5,'Cerveza elaborada con miel orgánica que se agrega en la etapa de maduración, evitando que se transforme en alcohol, resalte el aroma y el sabor.','/Images/ArticulosCreados/nuevo1656537526937.jpg',100,3),(24,'Patagonia',262.00,5,'Patagonia presenta una combinación de maltas especiales, que da lugar a una cerveza de color dorado bronce brillante de leve amargor y cuerpo medio.','/Images/ArticulosCreados/nuevo1656537550219.jpg',100,3),(25,'Estancia Mendoza',755.00,5,'Cabernet Sauvignon Roble de rojo intenso y profundo, en nariz se percibe pimienta negra, pimientos verdes y frutos rojos.','/Images/ArticulosCreados/nuevo1656538712333.jpg',100,1),(26,'Estancia Mendoza',1180.00,5,'Malbec Reserva es brillante, de intenso color rojo con destellos violaceos. Tiene aroma a frutas frescas, como cerezas y moras, propio de este varietal.','/Images/ArticulosCreados/nuevo1656538748585.jpg',100,1),(27,'Novecento',504.00,5,'Cabernet de color rojo púrpura intenso. En nariz se presenta frutado y especiado. Joven, elegante y de buena estructura.','/Images/ArticulosCreados/nuevo1656538772151.jpg',100,1),(28,'Novecento',650.00,5,'Chardonnay de color amarrillo brillante de matices verdosos. En nariz nos recuerda a la manzana verde con aromas cítricos. Fresco y de equilibrada acidez con final untuoso.','/Images/ArticulosCreados/nuevo1656538804917.jpg',100,1),(29,'Terrible Corte',2500.00,5,'Malbec elaborado con uvas de primera zona, provenientes de diferentes viñedos en su mayoría de Valle de UCO.','/Images/ArticulosCreados/nuevo1656538828388.jpg',100,1),(30,'Mythic Vineyard',1690.00,5,'Cabernet Sauvignon de dolor rojo granate intenso. En nariz se perciben aromas a frutos negros, especias y eucaliptus.','/Images/ArticulosCreados/nuevo1656538866842.jpg',100,1),(31,'Familia Deicas',2650.00,5,'Malbec de color rojo oscuro intenso. A la nariz revela notas de flores, ciruelas, cassis y arándanos al primer paso. Luego se destaca el olor a vainilla y regaliz.','/Images/ArticulosCreados/nuevo1656538898090.jpg',100,1),(32,'Texto Súbito',1080.00,5,'Cabernet Sauvignon-Petit Verdot de color rojo rubí oscuro. En su aroma se destacan los frutos rojos y vegetales como el pimiento, que se complementan con un toque herbal.','/Images/ArticulosCreados/nuevo1656538923452.jpg',100,1),(33,'Jameson',2600.00,5,'Whiskey irlandés Jameson es una mezcla de whiskies de alambique y de grano, es tan versátil como suave debido a su triple destilación.','/Images/ArticulosCreados/nuevo1656539179959.jpg',100,4),(34,'Chivas Regal',5500.00,5,'Chivas Extra 13 es Una mezcla rica y generosa, madurada en barricas de jerez español escogidas a mano por el Maestro Mezclador y su equipo.','/Images/ArticulosCreados/nuevo1656539213436.jpg',100,4),(35,'Whyte Mackay',4290.00,5,'El Whisky Whyte & Mackay Special es suave, de todos ricos que afirman su influencia en el fondo, antes de dar paso a un calido y agradable regusto el cual persiste en la boca.','/Images/ArticulosCreados/nuevo1656539237931.jpg',100,4),(36,'Jameson',3000.00,5,'Jameson Caskmates IPA es un whiskey añejado en barricas. Con sabor a lúpulo y cítricos suaves con notas de hierbas dulces y delicados tonos especiados.','/Images/ArticulosCreados/nuevo1656539263907.jpg',100,4),(37,'Elijah Craig',13343.00,5,'En nariz es espeso con notas que recuerdan al bosque. Tambien se nota claramente el roble de las barricas y notas a fruta. Este bourbon se destaca como uno de los de mejor aroma del mundo.','/Images/ArticulosCreados/nuevo1656539293359.jpg',100,4),(38,'Rittenhouse',11275.00,5,'El whisky Rittenhouse Straight Rye tiene un pasado histórico con una herencia que conmemora la famosa plaza Rittenhouse de Filadelfia.','/Images/ArticulosCreados/nuevo1656539341297.jpg',100,4),(39,'Loch Lomond',3685.00,5,'Reserve es un blend de malta y grano donde cada barril es seleccionado por su carácter y madurez para luego ser mezclado creando un whisky equilibrado.','/Images/ArticulosCreados/nuevo1656539379790.jpg',100,4),(40,'Evan Williams',5407.00,5,'Whiskey de sabor ahumado proveniente de las barricas de roble en las que es añiejado, dulce de azúcar moreno y notas de caramelo.','/Images/ArticulosCreados/nuevo1656539402858.jpg',100,4),(41,'Master Ship',1400.00,5,'Premium-Mastership es un amaro de corte alemán creado a partir de hierbas, maderas, especias, frutas, flores, semillas y raíces de todo el mundo que generan un blend rico en matices.','/Images/ArticulosCreados/nuevo1656539639454.jpg',100,2),(42,'Amarula',1660.00,5,'Crema de licor que se elabora en sudáfrica. Se hace con azúcar, crema y el fruto del árbol africano marula.','/Images/ArticulosCreados/nuevo1656539678120.jpg',100,2),(43,'Amaretto',5164.00,5,'Licor refinado de sabor suave con excepcionales aromas a almendras y vainilla. Elaborado de pura pasta de almendra, es envejecido ocho meses donde es presentado en una botella esbelta y elegante.','/Images/ArticulosCreados/nuevo1656539704730.jpg',100,2),(44,'Golden Age',2160.00,5,'Licor elaborado de manera artesanal a la forma tradicional europea, a partir de una maceración de pieles de naranjas dulces, en alcohol extra neutro con delicados toques de vainilla y violetas.','/Images/ArticulosCreados/nuevo1656539734603.jpg',100,2),(45,'Albany Cream',2010.00,5,'Un licor fácil de beber que se disfruta solo, con hielo o una amplia variedad de tragos dada su enorme versatilidad para la mezcla.','/Images/ArticulosCreados/nuevo1656539763106.jpg',100,2),(46,'Tres Plumas',522.00,5,'Licor seco elaborado con finos destilados e infusiones de hierbas aromáticas, es reposado y madurado en cascos de roble durante varios meses.','/Images/ArticulosCreados/nuevo1656539790091.jpg',100,2),(47,'Tres Plumas',498.00,5,'Licor de banana a base de vodka, que ha sido infundido con banana para darle la base del sabor de la fruta.','/Images/ArticulosCreados/nuevo1656539811533.jpg',100,2),(48,'Tres Plumas',588.00,5,'Licor de chocolate que a partir de una infusión de cacao, alcohol extra neutro y una base láctea le da su típica untuosidad y cuerpo. Un lento proceso de elaboración artesanal al estilo europeo.','/Images/ArticulosCreados/nuevo1656539834312.jpg',100,2);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(70) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `direccion` varchar(150) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `administrador` tinyint NOT NULL DEFAULT '0',
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `id_usuario_UNIQUE` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Alexis','Bello','alexisbello0310@hotmail.com','1985-10-03','1569559766','SAN LUIS 2428','/Images/Avatares/nuevo1656305459313.png',1,'$2a$10$5MzXmqYuFfCAp5LEv9nI8eUuCbg.Q4Ew51C2M7B/nTyKQXS0felGu'),(2,'Emerson','Méndez','emerarg@live.com','1991-08-01','1587996634','Av. Pueyrredon 3502','/Images/Avatares/nuevo1656373184462.png',1,'$2a$10$NZb2fKiGTxPwHLmSBtskqOLmX6uZSL4lRwE.f7gTvrozNH3lpnoWy'),(3,'Ariel','Pagani','arielpagani@outlook.com','1979-05-11','1532781558','Aguero 3587','/Images/Avatares/nuevo1656374370632.png',1,'$2a$10$993OCcSty.73Tt6jRKJQ5O5sTHKU1jeLsjk29x7q/TXPlOiXXBHk.'),(4,'Ignacio','Oteiza','oteizanacho@gmail.com','1998-01-15','1587693460','Donato 5651','/Images/Avatares/nuevo1656374491185.png',1,'$2a$10$wgVPaOU2..Hwx8UY86l5nu7AqLjfCHzssf6UKrEN0y0RnMoWraiY.'),(5,'Maximiliano','Novicki','mnovicki@hotmail.com','1975-04-11','1522358984','Diaz Velez 850','/Images/Avatares/nuevo1656373282052.png',0,'$2a$10$6cnfpwsfejowaXPaxUNOTOz7Npx1Y0fMYGVXgyV3FdyC1kkXhblqy'),(6,'Cielo','Roganovich','mariasky275@hotmail.com','1983-05-27','1582159835','Tucuman 1985','/Images/Avatares/nuevo1656374586475.png',0,'$2a$10$6AnnOrFMSk4KIN/eColJSe3aoDPzMAkOtv191iRb8h/Oeg54q.E0W');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-30  1:26:31
