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
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `categories_id_unique` ON `trampae_db`.`categories` (`id` ASC);


-- -----------------------------------------------------
-- Table `trampae_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`users` (
  `id` VARCHAR(255) NOT NULL,
  `third_party_id` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(255) NULL DEFAULT 'uploads/default.png',
  `bio` TEXT DEFAULT NULL,
  `password` VARBINARY(16535) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `uf` VARCHAR(2) NULL DEFAULT NULL,
  `whatsapp` VARCHAR(255) NULL DEFAULT NULL,
  `is_verified_mail` TINYINT(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `users_id_unique` ON `trampae_db`.`users` (`id` ASC);

CREATE UNIQUE INDEX `users_email_unique` ON `trampae_db`.`users` (`email` ASC);

CREATE UNIQUE INDEX `users_third_party_id_unique` ON `trampae_db`.`users` (`third_party_id` ASC);

CREATE UNIQUE INDEX `users_whatsapp_unique` ON `trampae_db`.`users` (`whatsapp` ASC);


-- -----------------------------------------------------
-- Table `trampae_db`.`change_pass_occurrences`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`change_pass_occurrences` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(255) NOT NULL,
  `hash_url` VARCHAR(255) NULL DEFAULT NULL,
  `status` TINYINT(1) NULL DEFAULT '0',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `change_pass_occurrences_id_unique` ON `trampae_db`.`change_pass_occurrences` (`id` ASC);

CREATE UNIQUE INDEX `change_pass_occurrences_hash_url_unique` ON `trampae_db`.`change_pass_occurrences` (`hash_url` ASC);


-- -- -----------------------------------------------------
-- -- Table `trampae_db`.`knex_migrations`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `trampae_db`.`knex_migrations` (
--   `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(255) NULL DEFAULT NULL,
--   `batch` INT(11) NULL DEFAULT NULL,
--   `migration_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY (`id`))
-- ENGINE = InnoDB
-- AUTO_INCREMENT = 9
-- DEFAULT CHARACTER SET = utf8mb4;


-- -- -----------------------------------------------------
-- -- Table `trampae_db`.`knex_migrations_lock`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `trampae_db`.`knex_migrations_lock` (
--   `index` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
--   `is_locked` INT(11) NULL DEFAULT NULL,
--   PRIMARY KEY (`index`))
-- ENGINE = InnoDB
-- AUTO_INCREMENT = 2
-- DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `trampae_db`.`service_providers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`service_providers` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(255) NOT NULL,
  `finished_works` INT(11) NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `service_providers_id_unique` ON `trampae_db`.`service_providers` (`id` ASC);


-- -----------------------------------------------------
-- Table `trampae_db`.`service_provider_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`service_provider_categories` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `service_provider_id` INT(10) UNSIGNED NOT NULL,
  `category_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `service_provider_categories_id_unique` ON `trampae_db`.`service_provider_categories` (`id` ASC);


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
-- Table `trampae_db`.`user_pf`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`user_pf` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(255) NOT NULL,
  `cpf` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `user_pf_id_unique` ON `trampae_db`.`user_pf` (`id` ASC);


-- -----------------------------------------------------
-- Table `trampae_db`.`user_pj`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trampae_db`.`user_pj` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(255) NOT NULL,
  `cpnj` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE UNIQUE INDEX `user_pj_id_unique` ON `trampae_db`.`user_pj` (`id` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
