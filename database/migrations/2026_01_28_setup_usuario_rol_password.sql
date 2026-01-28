-- =====================================================
-- SCRIPT PARA CREAR TABLAS PRINCIPALES
-- Base de datos: recluta_v1
-- Fecha: 2026-01-28
-- =====================================================

-- =====================================================
-- 1. CREAR TABLA ROL
-- =====================================================
CREATE TABLE `rol` (
  `idrol` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idrol`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insertar datos de roles
INSERT INTO `rol` (`idrol`, `descripcion`) VALUES 
(1, 'Administrador'),
(2, 'Aspirante'),
(3, 'Monitor');

-- =====================================================
-- 2. CREAR TABLA USUARIO
-- =====================================================
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `folio` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellidoP` varchar(100) DEFAULT NULL,
  `apellidoM` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `rol` int DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `activo` tinyint(1) DEFAULT '1',
  `delete` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `folio` (`folio`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_folio` (`folio`),
  KEY `idx_activo` (`activo`),
  CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`rol`) REFERENCES `rol` (`idrol`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- =====================================================
-- 3. CREAR TABLA PASSWORD_RESET_TOKENS
-- =====================================================
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
