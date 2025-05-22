// Paso 1: Importar la dependencia de Express
//const express = require('express'); // CommonJS
import express from 'express';  //ESModule
import disponibilidad from './routes/disponibilidad.router.mjs'

import dbConnect from './config/mongo.config.mjs'; // importamos la conexion a la base de datos. 
import appoiment from  './routes/appoiment.route.mjs'

// Paso 2: Ejecutar express
const app = express();


app.use( express.json()); // implementar la ruta como un Middleware de express
app.use(product); // implementar la ruta como un Middleware de express
app.use(appoiment); // implementa la ruta de appoiment. 
app.use(disponibilidad);

//invocar la cofiguracion de la conexion a la base de datos. 
dbConnect();



// Paso 4: Lanzar el servidor web en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor lanzado exitosamente ;)');
});