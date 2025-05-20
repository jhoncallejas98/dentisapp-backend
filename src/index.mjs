// Paso 1: Importar la dependencia de Express
//const express = require('express'); // CommonJS
import express from 'express';  //ESModule
import product from './routes/product.route.mjs'

// Paso 2: Ejecutar express
const app = express();
app.use(product); // implementar la ruta como un Middleware de express




// Paso 4: Lanzar el servidor web en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor lanzado exitosamente jejej');
});