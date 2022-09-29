CREATE SCHEMA IF NOT EXISTS `cafeapp` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `cafeapp`.`User` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,  
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,  
  PRIMARY KEY (`id`)
  )
ENGINE = InnoDB;

INSERT INTO `cafeapp`.`User`(`username`,`password`) VALUES("pepe","a12345b");

SELECT * FROM cafeapp.user;