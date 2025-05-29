// Paso 1: Importar la dependencia de Express
//const express = require('express'); // CommonJS
import express from 'express';  //ESModule
import disponibilidad from './routes/disponibilidad.router.mjs'

import dbConnect from './config/mongo.config.mjs'; // importamos la conexion a la base de datos. 

// Paso 2: Ejecutar express
const app = express();

app.use( express.json()); // implementar la ruta como un Middleware de express

//invocar la cofiguracion de la conexion a la base de datos. 
dbConnect();

app.use( disponibilidad )


// Paso 4: Lanzar el servidor web en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor lanzado exitosamente ;)');
});