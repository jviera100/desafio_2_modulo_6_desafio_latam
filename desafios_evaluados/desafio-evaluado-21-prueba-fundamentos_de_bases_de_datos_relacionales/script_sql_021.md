# desafio prueba 021

Server [localhost]:
Database [postgres]:
Port [5432]:
Username [postgres]:
Contraseña para usuario postgres:

psql (14.11)
ADVERTENCIA: El código de página de la consola (850) difiere del código
            de página de Windows (1252).
            Los caracteres de 8 bits pueden funcionar incorrectamente.
            Vea la página de referencia de psql «Notes for Windows users»
            para obtener más detalles.
Digite «help» para obtener ayuda.

<!-- -- Requerimiento 1: Crea el modelo (revisa bien cuál es el tipo de relación antes de crearlo), respeta las claves primarias, foráneas y tipos de datos. -->

<!-- DROP DATABASE IF EXISTS prueba_sql_jonathan_viera_021; -->
 CREATE DATABASE prueba_sql_jonathan_viera_021;
 
 <!-- DROP TABLE IF EXISTS peliculas; -->
 -- Tabla peliculas
CREATE TABLE peliculas (
   id_pelicula Int PRIMARY KEY,
   nombre VARCHAR(255) NOT NULL,
   anno INTEGER NOT NULL
);

 -- Tabla tags
 CREATE TABLE tags (
   id_tag Int PRIMARY KEY,
   tag VARCHAR(32) NOT NULL
 );

<!-- práctica común crear una tabla separada (en este caso, "peliculas_tags") para representar la relación entre dos entidades. Esta tabla permite flexibilidad y evita la duplicación de datos. Al utilizar una tabla separada, puedes agregar o eliminar fácilmente las asociaciones entre películas y etiquetas sin modificar la estructura de las tablas "peliculas" o "tags". -->

 -- Tabla peliculas_tags (relación muchos a muchos)
 CREATE TABLE peliculas_tags (
   id_pelicula INTEGER NOT NULL,
   id_tag INTEGER NOT NULL,
   PRIMARY KEY (id_pelicula, id_tag),
   FOREIGN KEY (id_pelicula) REFERENCES peliculas(id_pelicula),
   FOREIGN KEY (id_tag) REFERENCES tags(id_tag)
 );

<!-- -- Requerimiento 2: Inserta 5 películas y 5 tags, la primera película tiene que tener 3 tags asociados, la segunda película debe tener dos tags asociados. -->
-- Insertar películas
INSERT INTO peliculas (id_pelicula, nombre, anno) VALUES
   (1, 'El Padrino', 1972),
   (2, 'El Señor de los Anillos: La Comunidad del Anillo', 2001),
   (3, 'Avengers: Endgame', 2019),
   (4, 'Parasite', 2019),
   (5, 'El Hoyo', 2019);

 -- Insertar tags
INSERT INTO tags (id_tag, tag) VALUES
   (1, 'Drama'),
   (2, 'Fantasía'),
   (3, 'Acción'),
   (4, 'Ciencia ficción'),
   (5, 'Thriller');

   -- Insertar asociaciones entre películas y etiquetas
INSERT INTO peliculas_tags (id_pelicula, id_tag) VALUES
   (1, 1), (1, 3), (1, 5), -- Asociaciones de la primera película con 3 etiquetas
   (2, 2), (2, 4); -- Asociaciones de la segunda película con 2 etiquetas

<!-- -- Requerimiento 3: Cuenta la cantidad de tags que tiene cada película. Si una película no tiene tags debe mostrar 0.. -->
 -- Contar tags por película
SELECT p.nombre, COUNT(pt.id_tag) AS cantidad_tags
FROM peliculas p
LEFT JOIN peliculas_tags pt ON p.id_pelicula = pt.id_pelicula
GROUP BY p.id_pelicula, p.nombre
ORDER BY p.id_pelicula;


<!-- -- Requerimiento 4: Crea las tablas respetando los nombres, tipos, claves primarias y foráneas y tipos de datos. -->
 -- Tabla usuarios
 CREATE TABLE usuarios (
   id_usuario Int PRIMARY KEY,
   nombre VARCHAR(255) NOT NULL,
   edad INTEGER NOT NULL   
 );

 -- Tabla preguntas
 CREATE TABLE preguntas (
   id_pregunta Int PRIMARY KEY,
   pregunta VARCHAR(255) NOT NULL,
   respuesta_correcta VARCHAR
 );

 -- Tabla respuestas
 CREATE TABLE respuestas (
   id_respuesta iNT PRIMARY KEY,
   id_usuario INTEGER NOT NULL,
   id_pregunta INTEGER NOT NULL,
   respuesta VARCHAR(255) NOT NULL,
   correcta BOOLEAN NOT NULL,
   FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
   FOREIGN KEY (id_pregunta) REFERENCES preguntas(id_pregunta)
 ); 

<!-- Requerimiento 5: Agrega datos, 5 usuarios y 5 preguntas, la primera pregunta debe estar contestada dos veces correctamente por distintos usuarios, la pregunta 2 debe estar contestada correctamente sólo por un usuario, y las otras 2 respuestas deben estar incorrectas. a. Contestada correctamente significa que la respuesta indicada en la tabla respuestas es exactamente igual al texto indicado en la tabla de preguntas. -->
-- Insertar usuarios
INSERT INTO usuarios (id_usuario, nombre, edad) VALUES
   (1, 'Juan Pérez', 25),
   (2, 'María González', 30),
   (3, 'Pedro López', 40),
   (4, 'Ana Rodríguez', 20),
   (5, 'Diego García', 35);

-- Insertar preguntas
INSERT INTO preguntas (id_pregunta, pregunta, respuesta_correcta) VALUES
   (1, '¿Cuál es la capital de Francia?', 'París'),
   (2, '¿Cuál es la raíz cuadrada de 16?', '4'),
   (3, '¿Cuál es el color del cielo?', 'Azul'),
   (4, '¿Cuál es el nombre del presidente de Chile?', 'Gabriel Boric'),
   (5, '¿Cuál es el significado de la vida?', 'felicidad');

   -- Eliminar restricción de unicidad en la columna id_respuesta
ALTER TABLE respuestas DROP CONSTRAINT respuestas_pkey;

-- Insertar respuestas
INSERT INTO respuestas (id_usuario, id_pregunta, id_respuesta, respuesta, correcta) VALUES
   (1, 1, 1, 'París', TRUE),
   (1, 2, 1, 'París', FALSE), 
   (2, 1, 1, 'París', TRUE),
   (2, 2, 2, '4', TRUE),
   (3, 2, 3, 'Azul', FALSE),   
   (3, 3, 3, 'Azul', TRUE), 
   (4, 4, 4, 'Gabriel Boric', TRUE),
   (5, 5, 5, 'felicidad', TRUE);  

<!-- Requerimiento 6: Cuenta la cantidad de respuestas correctas totales por usuario (independiente de la pregunta). -->
 SELECT u.nombre, COUNT(r.correcta) AS cantidad_respuestas_correctas
 FROM usuarios u
 LEFT JOIN respuestas r ON u.id_usuario = r.id_usuario
 WHERE r.correcta = TRUE
 GROUP BY u.id_usuario, u.nombre
 ORDER BY u.id_usuario;
   


<!-- Requerimiento 7: Por cada pregunta, en la tabla reguntas, cuenta cuántos usuarios tuvieron la respuesta correcta. -->

 SELECT p.pregunta, COUNT(r.correcta) AS cantidad_respuestas_correctas
 FROM preguntas p
 LEFT JOIN respuestas r ON p.id_pregunta = r.id_pregunta
 WHERE r.correcta = TRUE
 GROUP BY p.id_pregunta, p.pregunta
 ORDER BY p.id_pregunta;

<!-- Requerimiento 8: Implementa borrado en cascada de las respuestas al borrar un usuario y borrar el primer usuario para probar la implementación. -->
ALTER TABLE respuestas
ADD CONSTRAINT fk_usuario_respuesta
FOREIGN KEY (id_usuario)
REFERENCES usuarios(id_usuario)
ON DELETE CASCADE;

<!-- Requerimiento 9: Crea una restricción que impida insertar usuarios menores de 18 años en la base de datos. -->
 ALTER TABLE usuarios
 ADD CHECK (edad >= 18);

<!-- Requerimiento 10: Altera la tabla existente de usuarios agregando el campo email con la restricción de único. -->

ALTER TABLE usuarios
ADD COLUMN email VARCHAR(100) UNIQUE;

