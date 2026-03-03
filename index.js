const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuariosRoutes.js');

app.get('/', (req, res) =>{
    res.send('Hola mundo');
});

app.use("/usuarios", usuariosRoutes); //Esta línea nos permite utilizar el modelo usuarios sin tener que reescribir las rutas.

app.listen(6800, () => {
    console.log('Servidor conectado');
});