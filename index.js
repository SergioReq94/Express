const express = require('express');
const cors = require('cors');
const app = express();
const usuariosRoutes = require('./routes/usuariosRoutes.js');

app.use(express.json()); //Middleware para parsear el cuerpo de las solicitudes como JSON.
app.use(cors()); //Middleware para permitir solicitudes desde cualquier origen (CORS).
app.use(express.urlencoded({ extended: true })); //Middleware para parsear el cuerpo de las solicitudes con URL-encoded.

app.get('/', (req, res) =>{
    res.send('Hola mundo');
});

app.use("/usuarios", usuariosRoutes); //Esta línea nos permite utilizar el modelo usuarios sin tener que reescribir las rutas.

app.listen(6800, () => {
    console.log('Servidor conectado');
});