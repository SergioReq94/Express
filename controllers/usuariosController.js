class UsuariosController {
    constructor() {

    }

    consultarUsuarios(req, res) {
        res.json({msg: 'Consulta de usuarios desde el controlador'});
    }

    consultarDetalleUsuario(req, res) {
        const {id} = req.params; //Aquí podemos obtener el ID del usuario que se ha pasado por la URL, también es válido añadir .id al final de req.params, pero es más común usar destructuring para obtenerlo directamente.
        res.json({msg: `Consulta de usuario por ID desde el controlador con id: ${id}`});
    }

    addUsuario(req, res) {
        res.json({msg: 'Creación de usuarios desde el controlador'});
    }

    updateUsuario(req, res) {
        res.json({msg: 'Actualización de usuario desde el controlador'});
    }

    deleteUsuario(req, res) {
        res.json({msg: 'Borrado de usuario desde el controlador'});
    }   
}

export default new UsuariosController();