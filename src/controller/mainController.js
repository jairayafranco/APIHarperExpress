exports.principal = (req, res) => {
  res.json({
    message: 'Principal',
    guias: {
      guia1: '/guiacursos',
      guia2: '/guianotas'
    }
  })
}

exports.guiaCursos = (req, res) => {
  res.json({
    rutas: {
        'get': '/cursos',
        'get2': '/cursos/:identificador',
        'post': '/cursos',
        'put': '/cursos/:id',
        'delete': '/cursos/:id'
      },
      datos: {
        message: 'Este es el formato JSON a enviar',
        json: {
          identificador: 'IdExample',
          nombre: 'Name Test',
          descripcion: 'Useful Description',
          autor: 'Author',
          link: 'www.mysite.com'
        }
      },
      pasos: {
        'get2': 'Para obtener un objeto en especifico se envia su identificador en los parametros',
        'put': 'Para actualizar hay que enviar el id del objeto en los parametros',
        'delete': 'Para borrar hay que enviar el id del objeto en los parametros'
      }
  })
}

exports.guiaNotas = (req, res) => {
  res.json({
    rutas: {
        'get': '/notas',
        'get2': '/notas/:idNota',
        'post': '/notas',
        'put': '/notas/:id',
        'delete': '/notas/:id'
      },
      datos: {
        message: 'Este es el formato JSON a enviar',
        json: {
          idNota: "123",
          titulo: "Comprar Pan",
          descripcion: "Pillar el pan en la tienda de pepita"
        }
      },
      pasos: {
        'get2': 'Para obtener una nota en especifico se envia su idNota en los parametros',
        'put': 'Para actualizar hay que enviar su idNota del objeto en los parametros',
        'delete': 'Para borrar hay que enviar su idNota del objeto en los parametros'
      }
  })
}