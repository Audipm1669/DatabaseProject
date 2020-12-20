

--
-- Database: `stella_boutique`
--
CREATE DATABASE IF NOT EXISTS stella_boutique;
USE stella_boutique;
-- --------------------------------------------------------
--
-- Table structure for table `user`
--
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(6) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `birthday` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phoneNumber` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY(`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
);
-- --------------------------------------------------------
--
-- Table structure for table `item`
--

CREATE TABLE IF NOT EXISTS `item` (
  `id` int(6) NOT NULL,
  `name` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `size` varchar(5) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `pictureURL` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);
-- --------------------------------------------------------
--
-- Table structure for table `discount`
--
CREATE TABLE IF NOT EXISTS `discount` (
  `id` int(6) NOT NULL,
  `value` float NOT NULL,
  `code` varchar(5) NOT NULL,
  `name` varchar(100) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `code_UNIQUE` (`code`)
);
-- --------------------------------------------------------
--
-- Table structure for table `like`
--

CREATE TABLE IF NOT EXISTS `like` (
  `userID` int(6) NOT NULL,
  `itemID` int(6) NOT NULL,
  PRIMARY KEY (`userID`,`itemID`),
  UNIQUE KEY `userID_UNIQUE` (`userID`),
  UNIQUE KEY `itemID_UNIQUE` (`itemID`),
  CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `user` (`id`),
  CONSTRAINT `itemID` FOREIGN KEY (`itemID`) REFERENCES `item` (`id`)
);
-- --------------------------------------------------------
--
-- Table structure for table `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `id` int(6) NOT NULL,
  `orderDate` datetime NOT NULL,
  `status` int(11) NOT NULL,
  `discountID` int(6) DEFAULT NULL,
  `orderUserID` int(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  CONSTRAINT `discountID` FOREIGN KEY (`discountID`) REFERENCES `discount` (`id`),
  CONSTRAINT `orderUserID` FOREIGN KEY (`orderUserID`) REFERENCES `user` (`id`)
);
-- --------------------------------------------------------
--
-- Table structure for table `itemlist`
--
CREATE TABLE IF NOT EXISTS `itemlist` (
  `orderItemID` int(6) NOT NULL,
  `orderID` int(6) NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`orderItemID`,`orderID`),
  UNIQUE KEY `orderItemID_UNIQUE` (`orderItemID`),
  UNIQUE KEY `orderID_UNIQUE` (`orderID`),
  CONSTRAINT `orderItemID` FOREIGN KEY (`orderItemID`) REFERENCES `item` (`id`),
  CONSTRAINT `orderID` FOREIGN KEY (`orderID`) REFERENCES `order` (`id`)
);
-- --------------------------------------------------------
--
-- Table structure for table `rate`
--

CREATE TABLE IF NOT EXISTS `rate` (
  `rateItemID` int(6) NOT NULL,
  `rateUserID` int(6) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  PRIMARY KEY (`rateItemID`,`rateUserID`),
  UNIQUE KEY `rateItemID_UNIQUE` (`rateItemID`),
  UNIQUE KEY `rateUserID_UNIQUE` (`rateUserID`),
  CONSTRAINT `rateItemID` FOREIGN KEY (`rateItemID`) REFERENCES `item` (`id`),
  CONSTRAINT `rateUserID` FOREIGN KEY (`rateUserID`) REFERENCES `user` (`id`)
);
