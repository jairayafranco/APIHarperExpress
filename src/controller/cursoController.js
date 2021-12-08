const client = require('../db/db_config')

exports.getCursos = (req, response) => {
    client.query('SELECT identificador, nombre, descripcion, autor, link, id FROM registro_cursos.cursos', (err, res) => {
        if (err) {
            response.status(500).json(err)
        }
        response.status(res.statusCode).json(res.data)
    })
}

exports.getCurso = (req, response) => {
    client.query(`SELECT identificador, nombre, descripcion, autor, link, id FROM registro_cursos.cursos WHERE identificador="${req.params.identificador}"`, 
    (err, res) => {
        if (err) {
            response.status(500).json(err)
        }
        response.status(res.statusCode).json(res.data)
    })
}

exports.addCurso = (req, response) => {
    client.insert({
        table: 'cursos',
        records: [
            {
                identificador: req.body.identificador,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                autor: req.body.autor,
                link: req.body.link
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

exports.editCurso = (req, response) => {
    client.update({
        table: 'cursos',
        records: [
            {
                id: req.params.id,
                identificador: req.body.identificador,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                autor: req.body.autor,
                link: req.body.link
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

exports.deleteCurso = (req, response) => {
    client.query(`DELETE FROM registro_cursos.cursos WHERE id = "${req.params.id}"`, 
    (err, res) => {
        if (err) {
            response.status(500).json(err)
        }
        response.status(res.statusCode).json(res.data)
    })
}