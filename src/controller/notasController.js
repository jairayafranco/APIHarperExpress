const client = require('../db/db_config')

exports.getNotas = (req, response) => {
    client.query('SELECT idNota, titulo, descripcion, id FROM registro_cursos.notas', (err, res) => {
        if (err) {
            response.status(500).json(err)
        }
        response.status(res.statusCode).json(res.data)
    })
}

exports.getNota = (req, response) => {
    client.query(`SELECT idNota, titulo, descripcion, id FROM registro_cursos.notas WHERE idNota="${req.params.idNota}"`, 
    (err, res) => {
        if (err) {
            response.status(500).json(err)
        }
        response.status(res.statusCode).json(res.data)
    })
}

exports.addNota = (req, response) => {
    client.insert({
        table: 'notas',
        records: [
            {
                idNota: req.body.idNota,
                titulo: req.body.titulo,
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

exports.editNota = (req, response) => {
    client.update({
        table: 'notas',
        records: [
            {
                id: req.params.id,
                idNota: req.body.idNota,
                titulo: req.body.titulo,
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

exports.deleteNota = (req, response) => {
    client.query(`DELETE FROM registro_cursos.notas WHERE id = "${req.params.id}"`, 
    (err, res) => {
        if (err) {
            response.status(500).json(err)
        }
        response.status(res.statusCode).json(res.data)
    })
}