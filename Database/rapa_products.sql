-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rapa
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `createdAt` varchar(45) NOT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `userLiked` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (31,'France','Paris',4100,'2022-06-06 21:14:01','2022-06-06 21:14:01','http://localhost:3000/images/wallpaper.jpg1654550041536.jpg',NULL,NULL),(32,'Indonesia','Jakarta',4200,'2022-06-06 20:53:29','2022-06-06 20:53:29','http://localhost:3000/images/indonesia7.jpg1654548809646.jpg',NULL,NULL),(33,'Australia','Melbourne',3900,'2022-06-06 21:00:50','2022-06-06 21:00:50','http://localhost:3000/images/australia.jpg1654549250893.jpg',NULL,NULL),(34,'Rapa Nui','Rapa Nui',5200,'2022-06-06 21:04:26','2022-06-06 21:04:26','http://localhost:3000/images/rapa-wallpaper.jpg1654549466683.jpg',NULL,NULL),(40,'Japan','Tokyo',4500,'2022-06-07 06:22:10','2022-06-07 06:22:10','http://localhost:3000/images/97969.jpg1654582930856.jpg',NULL,NULL),(41,'Greece','Athens',1250,'2022-08-24 04:08:12','2022-08-24 04:08:12','http://localhost:3000/images/greece.jpg1661314092446.jpg',NULL,NULL),(43,'Mexico','Mexico City',2600,'2022-08-24 04:12:51','2022-08-24 04:12:51','http://localhost:3000/images/mexico.jpg1661314371535.jpg',NULL,NULL),(44,'Guinea','Conakry',2600,'2022-08-30 12:11:30','2022-08-30 12:11:30','http://localhost:3000/images/sunset.jpg1661861490333.jpg',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-10 16:03:47
