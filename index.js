import express from 'express';
import usuariosRoutes from './routes/UsuariosRoutes.js';
const app = express();

// Middleware necesario para procesar JSON en el cuerpo de las peticiones
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hola mundo');
});

// Rutas para usuarios
app.use("/usuarios", usuariosRoutes); 

app.listen(6800, () => {
    console.log('Servidor conectado');
});