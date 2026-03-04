const db = require('../database/conexion.js');

class UsuariosController {
    
    consultarUsuarios(req, res) {
        res.json({msg: 'Consulta de usuarios desde el controlador'});
    }

    consultarDetalleUsuario(req, res) {
        const id = req.params.id; //Aquí podemos obtener el ID del usuario que se ha pasado por la URL.
        res.json({msg: `Consulta de usuario por ID desde el controlador con id: ${id}`});
    }

    addUsuario(req, res) {
        try {
            // console.log("body recibido:", req.body); //Aquí imprimimos el cuerpo de la solicitud para verificar que estamos recibiendo los datos correctamente.

            const { nombre, telefono, email } = req.body; //Aquí obtenemos los datos del usuario que se han enviado en el cuerpo de la solicitud.

        // // Validación extra para evitar que el error llegue a la BD
        // if (!nombre) {
        //     return res.status(400).json({ error: "El campo 'nombre' llegó vacío al servidor" });
        // }
            db.query(`INSERT INTO usuarios  (nombre, telefono, email) VALUES (?, ?, ?);`, [nombre, telefono, email], (err, result) => {
                if (err) {
                    console.error('Error al insertar el usuario:', err);
                    res.status(500).send('Error al crear el usuario');
                } else {
                    res.status(201).json({id: result.insertId, msg: 'Usuario creado exitosamente'});
                }
            });
        } catch (err) {
            res.status(500).send(err.message);
            
        }
    }

    updateUsuario(req, res) {
        res.json({msg: 'Actualización de usuario desde el controlador'});
    }

    deleteUsuario(req, res) {
        res.json({msg: 'Borrado de usuario desde el controlador'});
    }   
}

module.exports = new UsuariosController();