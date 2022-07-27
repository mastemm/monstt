CREATE DATABASE  IF NOT EXISTS `monstt` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `monstt`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: monstt
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `content` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `body` longtext NOT NULL,
  `author` varchar(45) NOT NULL,
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` VALUES (1,'Mon 1er article','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Mass','22 juillet 2022');
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(45) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `rank` int DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `points` int DEFAULT NULL,
  `avatar` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'FOSSE','Anthony',15,'Vétéran',1581,'https://www.leparisien.fr/resizer/q6UqCJy6almL89_Lk_nhvIAw9l0=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/G5IVREHUV2IX4JNGBISSZXSTZU.jpg'),(2,'SUBBURATHINAM SAMPATH','Suraj',15,'Sénior',1560,'https://www.mykhel.com/img/2021/04/sharath-kamal-1617691739.jpg'),(3,'RAOUX','Benjamin',15,'Sénior',1545,'https://img.20mn.fr/ToLCddiBTouK-hk-ScMFiw/768x492_pongiste-simon-gauzy-vise-deuxieme-titre-champion-france-mans'),(4,'DEBARBIEUX','Anthony',15,'Vétéran',1530,'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mondial_Ping_-_Gatien-Saive_-_26.jpg/220px-Mondial_Ping_-_Gatien-Saive_-_26.jpg'),(5,'KAZMIERCZAK','Antoine',14,'Sénior',1491,'https://www.ettu.org/images/redaktion/News/2019/11_November/lebrun_0bab1_f_666x375.jpg'),(6,'DRUON','Françcois',14,'Sénior',1477,'https://tabletennis-reference.com/images/player/40_1_450.jpg'),(7,'JOUY','Vincent',14,'Sénior',1413,'https://cdn-s-www.dna.fr/images/AD27A7DF-4854-48E3-B127-24DE743C666E/NW_detail_M/title-1637789515.jpg'),(8,'VANDEPUTTE ','Mathys',13,'Sénior',1382,'https://www.ettu.org/images/redaktion/News/2017/11_November/franziska_2ff4b_f_666x375.JPG'),(9,'MAO','Massima',13,'Sénior',1336,'https://zupimages.net/up/22/29/92qz.jpg'),(10,'LEGROS','Christophe',13,'Vétéran',1325,'https://tennis-de-table.s3.dualstack.eu-west-1.amazonaws.com/original/3X/a/d/adfca4eaa3be34ee72f4344388a759bca03c1497.jpeg');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-27  9:54:43
