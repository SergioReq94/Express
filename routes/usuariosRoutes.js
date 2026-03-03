const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController.js');

router.get('/', usuariosController.consultarUsuarios);

router.post('/', usuariosController.addUsuario);

// router.get('/:id', (req, res) =>{
//     res.json({msg: 'Consulta de usuario por ID'});
// });

// router.put('/:id', (req, res) =>{
//     res.json({msg: 'Actualización de usuario'});
// });

// router.delete('/:id', (req, res) =>{
//     res.json({msg: 'Borrado de usuario'});
// });

router.route('/:id')
    .get(usuariosController.consultarDetalleUsuario)
    .put(usuariosController.updateUsuario)
    .delete(usuariosController.deleteUsuario);


module.exports = router;