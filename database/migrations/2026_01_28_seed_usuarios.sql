-- =====================================================
-- SCRIPT PARA INSERTAR USUARIOS DE PRUEBA
-- Base de datos: recluta_v1
-- Tabla: usuario
-- Fecha: 2026-01-28
-- =====================================================

-- Contraseña hasheada: password123
-- Hash: $2y$10$s6zhVNLmzIKK8522zfh6yOQLDQ6GEB5ooYTRjDtiwYBtl2/mi6Y8m

-- =====================================================
-- INSERTAR USUARIO ADMINISTRADOR
-- =====================================================
INSERT INTO `usuario` (
    `email`, 
    `nombre`, 
    `pApelldio`, 
    `sApellido`, 
    `password`, 
    `rol`, 
    `activo`, 
    `delete`, 
    `fecha_creacion`
) VALUES (
    'admin@recluta.test',
    'Administrador',
    'Sistema',
    'Recluta',
    '$2y$10$s6zhVNLmzIKK8522zfh6yOQLDQ6GEB5ooYTRjDtiwYBtl2/mi6Y8m',
    1,
    1,
    1,
    NOW()
) ON DUPLICATE KEY UPDATE 
    `nombre` = 'Administrador',
    `pApelldio` = 'Sistema',
    `sApellido` = 'Recluta',
    `rol` = 1;

-- =====================================================
-- INSERTAR USUARIO ASPIRANTE DE PRUEBA
-- =====================================================
INSERT INTO `usuario` (
    `email`, 
    `nombre`, 
    `pApelldio`, 
    `sApellido`, 
    `password`, 
    `rol`, 
    `activo`, 
    `delete`, 
    `fecha_creacion`
) VALUES (
    'aspirante@recluta.test',
    'Juan',
    'Pérez',
    'García',
    '$2y$10$s6zhVNLmzIKK8522zfh6yOQLDQ6GEB5ooYTRjDtiwYBtl2/mi6Y8m',
    2,
    1,
    1,
    NOW()
) ON DUPLICATE KEY UPDATE 
    `nombre` = 'Juan',
    `pApelldio` = 'Pérez',
    `sApellido` = 'García',
    `rol` = 2;

-- =====================================================
-- VERIFICAR USUARIOS INSERTADOS
-- =====================================================
SELECT `idusuario`, `email`, `nombre`, `pApelldio`, `sApellido`, `rol`, `activo` 
FROM `usuario` 
WHERE `email` IN ('admin@recluta.test', 'aspirante@recluta.test');

-- =====================================================
-- FIN DEL SCRIPT
-- =====================================================
