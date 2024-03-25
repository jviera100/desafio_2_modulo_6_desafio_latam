const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware para parsear el body de las solicitudes a JSON
app.use(express.json());

// Ruta para crear un nuevo deporte
app.post('/crear-deporte', (req, res) => {
    const { nombre, precio } = req.body;

    // Leer el archivo JSON actual
    const deportes = JSON.parse(fs.readFileSync('deportes.json'));

    // Agregar el nuevo deporte
    deportes.push({ nombre, precio });

    // Escribir en el archivo JSON
    fs.writeFileSync('deportes.json', JSON.stringify(deportes));

    res.send('Deporte creado correctamente');
});

// Ruta para obtener todos los deportes
app.get('/deportes', (req, res) => {
    // Leer el archivo JSON
    const deportes = JSON.parse(fs.readFileSync('deportes.json'));
    res.json(deportes);
});

// Ruta para editar el precio de un deporte
app.put('/editar-deporte/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const { precio } = req.body;

    // Leer el archivo JSON
    let deportes = JSON.parse(fs.readFileSync('deportes.json'));

    // Encontrar el deporte por su nombre y actualizar el precio
    for (let deporte of deportes) {
        if (deporte.nombre === nombre) {
            deporte.precio = precio;
            break;
        }
    }

    // Escribir en el archivo JSON
    fs.writeFileSync('deportes.json', JSON.stringify(deportes));

    res.send('Deporte actualizado correctamente');
});

// Ruta para eliminar un deporte
app.delete('/eliminar-deporte/:nombre', (req, res) => {
    const nombre = req.params.nombre;

    // Leer el archivo JSON
    let deportes = JSON.parse(fs.readFileSync('deportes.json'));

    // Filtrar los deportes para excluir el que se desea eliminar
    deportes = deportes.filter(deporte => deporte.nombre !== nombre);

    // Escribir en el archivo JSON
    fs.writeFileSync('deportes.json', JSON.stringify(deportes));

    res.send('Deporte eliminado correctamente');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
//archivo deportes.json inicializado correctamente con un array vacío ([])  