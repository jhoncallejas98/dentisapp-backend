// Paso 1: Importar la dependencia de Express
//const express = require('express'); // CommonJS
import express from 'express';  //ESModule
import historiaClinica from './routes/historia-clinica.route.mjs';
import dbConnect from './config/mongo.config.mjs'; // importamos la conexion a la base de datos. 


// Paso 2: Ejecutar express
const app = express();

dbConnect();

app.use ( express.json() );


app.use( historiaClinica );
//invocar la cofiguracion de la conexion a la base de datos. 
dbConnect();


// Paso 4: Lanzar el servidor web en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor lanzado exitosamente jejej');
});