const client = require('../db/db_config')

exports.getItems = (req, response) => {
    client.query('SELECT id, descripcion FROM registro_cursos.items', (err, res) => {
        if (err) {
            response.status(500).json(err)
        }
        response.status(res.statusCode).json(res.data)
    })
}

exports.addItem = (req, response) => {
    client.insert({
        table: 'items',
        records: [
            {
                descripcion: req.body.descripcion
            }
        ]
    },
        (err, res) => {
            if (err) {
                response.status(500).json(err)
            }
            response.status(res.statusCode).json(res.data)
        }
    )
}

exports.editItem = (req, response) => {
    client.update({
        table: 'items',
        records: [
            {
                id: req.params.id,
                descripcion: req.body.descripcion
            }
        ]
    },
        (err, res) => {
            if (err) {
                response.status(500).json(err)
            }
            response.status(res.statusCode).json(res.data)
        }
    )
}

exports.deleteItem = (req, response) => {
    client.query(`DELETE FROM registro_cursos.items WHERE id = "${req.params.id}"`, 
    (err, res) => {
        if (err) {
            response.status(500).json(err)
        }
        response.status(res.statusCode).json(res.data)
    })
}