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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `city` varchar(250) NOT NULL,
  `country` varchar(250) NOT NULL,
  `isAdmin` tinyint DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idusers_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Bojack','Horseman','Bojack@gmail.com','$2b$10$w1V5HSxA.zJp9HdgNWoMJOUxYQblD6P/1zuPlZJFC5l9mlc2luh/a','Los Angeles','United States',NULL,'2022-02-02 17:53:35','2022-02-02 17:53:35'),(5,'Din','Djarin','Mandolorian@gmail.com','$2b$10$hCtJ/klJIgcNMW1XdCIuIuCDjpqtqDvcaEyLQCUSLoiy8AyTmSs2O','New York','United States',1,'2022-02-02 20:09:49','2022-04-16 03:59:57'),(8,'Alexander','Horseman','Alexander@gmail.com','$2b$10$YXjdHD4YN/vt.z/EJvLxZO.6DvHx61PpXnJPNA7cIQXOLJimYZ0jy','Athens','Greece',NULL,'2022-02-04 15:20:51','2022-02-04 15:20:51'),(36,'DemoUser','User','Demouser@gmail.com','$2b$10$dzs7eIiiygA64XfOsMBNquCm5WenGB87EDR3my8HZpi1oWdnSSUqO','New York','United States',NULL,'2022-04-20 22:20:28','2022-09-02 21:15:24'),(38,'Aboudoul-Gadiri','SIMAKHA','Kent@Daily.com','$2b$10$AM/kySsScPzU0Qe05GDaZ.8iYGCki/dIQ3aDVz7EZWsuBwcVqcJ3S','Paris','France',NULL,'2022-05-20 17:26:55','2022-05-20 17:26:55'),(42,'Jean','Kent','Kentao@Daily.com','$2b$10$7BwFctC6cQ7wc1NJvK4C.OvJT.0spBTpO5l6TsnYjoUnWFO8qMHta','Metropolis','Lop',NULL,'2022-09-01 18:27:01','2022-09-01 18:27:01'),(56,'Auba','Manian','Auba@gmail.com','$2b$10$ICmIgHUJpK7R3t6sm7XxWue8xDTdKSd1d0Y.0h8wci8de4/EzCXLO','Libreville','Gabon',NULL,'2022-09-02 13:31:22','2022-09-02 13:31:22');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
