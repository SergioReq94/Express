import express from 'express';
import usuariosController from '../controllers/usuariosController.js';
const router = express.Router();

//Rutas base para usuarios
router.get('/', usuariosController.consultarUsuarios);
router.post('/', usuariosController.addUsuario);

// Rutas para operaciones específicas con usuarios agrupadas con .route()
router.route('/:id')
    .get(usuariosController.consultarDetalleUsuario)
    .put(usuariosController.updateUsuario)
    .delete(usuariosController.deleteUsuario);

export default router;