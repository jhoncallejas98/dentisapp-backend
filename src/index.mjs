// Paso 1: Importar la dependencia de Express
//const express = require('express'); // CommonJS
import express from 'express';  //ESModule
import product from './routes/product.route.mjs'
import dbConnect from './config/mongo.config.mjs'; // importamos la conexion a la base de datos. 
import appoiment from  './routes/appoiment.route.mjs'

// Paso 2: Ejecutar express
const app = express();
app.use(express.json()); // habilito el interprete de formato json
app.use(appoiment); // habilito el interprete de formato json

// Paso 3: Configurar la conexión a la base de datos
// dbConnect(); // llamamos la funcion de la conexion a la base de datos.


//invocar la cofiguracion de la conexion a la base de datos. 
dbConnect();


// Paso 4: Lanzar el servidor web en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor lanzado exitosamente jejej');
});