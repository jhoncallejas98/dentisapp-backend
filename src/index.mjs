// Paso 1: Importar la dependencia de Express
//const express = require('express'); // CommonJS
import express from 'express';  //ESModule
import dbConnect from './config/mongo.config.mjs'; // importamos la conexion a la base de datos. 
import Users from './routes/users.route.mjs'
import auth from './routes/auth.router.mjs'; // importamos la ruta de autenticacion
// Paso 2: Ejecutar express
const app = express();
                       // implementar la ruta como un Middleware de express


//invocar la cofiguracion de la conexion a la base de datos. 
dbConnect();
app.use(express.json() );
app.use(Users)
app.use(auth);
// Paso 4: Lanzar el servidor web en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor lanzado exitosamente jejej');
} );