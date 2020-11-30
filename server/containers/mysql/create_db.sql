-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trampae_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `trampae_db` ;

-- -----------------------------------------------------
-- Schema trampae_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trampae_db` DEFAULT CHARACTER SET utf8mb4 ;
USE `trampae_db` ;

-- -----------------------------------------------------
-- Table `trampae_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`categories` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 38
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `categories_id_unique` ON `trampae_db`.`categories` (`id` ASC) ;

-- -----------------------------------------------------
-- Table `trampae_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`users` (
  `id` VARCHAR(255) NOT NULL,
  `third_party_id` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(255) NULL DEFAULT 'uploads/default.png',
  `bio` TEXT NULL DEFAULT NULL,
  `password` VARBINARY(16535) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `uf` VARCHAR(2) NULL DEFAULT NULL,
  `whatsapp` VARCHAR(255) NULL DEFAULT NULL,
  `is_verified_mail` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `users_id_unique` ON `trampae_db`.`users` (`id` ASC) ;

CREATE UNIQUE INDEX `users_email_unique` ON `trampae_db`.`users` (`email` ASC) ;

CREATE UNIQUE INDEX `users_third_party_id_unique` ON `trampae_db`.`users` (`third_party_id` ASC) ;

CREATE UNIQUE INDEX `users_whatsapp_unique` ON `trampae_db`.`users` (`whatsapp` ASC) ;


-- -----------------------------------------------------
-- Table `trampae_db`.`change_pass_occurrences`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`change_pass_occurrences` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(255) NOT NULL,
  `hash_url` VARCHAR(255) NULL DEFAULT NULL,
  `status` TINYINT(1) NULL DEFAULT 0,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `change_pass_occurrences_id_unique` ON `trampae_db`.`change_pass_occurrences` (`id` ASC) ;

CREATE UNIQUE INDEX `change_pass_occurrences_hash_url_unique` ON `trampae_db`.`change_pass_occurrences` (`hash_url` ASC) ;

CREATE INDEX `change_pass_occurrences_user_id_foreign` ON `trampae_db`.`change_pass_occurrences` (`user_id` ASC) ;

-- -----------------------------------------------------
-- Table `trampae_db`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`services` (
  `id` VARCHAR(255) NOT NULL,
  `price` DECIMAL(8,2) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `uf` VARCHAR(2) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `category_id` INT(10) UNSIGNED NOT NULL,
  `service_provider_id` INT(10) UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `services_id_unique` ON `trampae_db`.`services` (`id` ASC);

-- -----------------------------------------------------
-- Table `trampae_db`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`services` (
  `id` VARCHAR(255) NOT NULL,
  `price` DECIMAL(8,2) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `uf` VARCHAR(2) NOT NULL,
  `status` TINYINT(1) NULL DEFAULT 0,
  `user_id` VARCHAR(255) NOT NULL,
  `category_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `services_id_unique` ON `trampae_db`.`services` (`id` );

CREATE INDEX `services_user_id_foreign` ON `trampae_db`.`services` (`user_id` );

CREATE INDEX `services_category_id_foreign` ON `trampae_db`.`services` (`category_id` );

-- -----------------------------------------------------
-- Table `trampae_db`.`completed_services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`completed_services` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_assigned_id` VARCHAR(255) NOT NULL COMMENT 'Usuário que postou',
  `user_requested_id` VARCHAR(255) NOT NULL COMMENT 'Usuário que prestou',
  `service_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `completed_services_id_unique` ON `trampae_db`.`completed_services` (`id` ASC);

CREATE INDEX `completed_services_user_assigned_id_foreign` ON `trampae_db`.`completed_services` (`user_assigned_id` ASC);

CREATE INDEX `completed_services_user_requested_id_foreign` ON `trampae_db`.`completed_services` (`user_requested_id` ASC);

CREATE INDEX `completed_services_service_id_foreign` ON `trampae_db`.`completed_services` (`service_id` ASC);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
