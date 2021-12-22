const cursoController = require('../controller/cursoController')
const mainController = require('../controller/mainController')
const notasController = require('../controller/notasController')
const router = require('express').Router()

//Ruta principal
router.get('/', mainController.principal)
      .get('/guiacursos', mainController.guiaCursos)
      .get('/guianotas', mainController.guiaNotas)

//Rutas cursos
router.get('/cursos', cursoController.getCursos)
      .get('/cursos/:identificador', cursoController.getCurso)
      .post('/cursos/', cursoController.addCurso)
      .put('/cursos/:id', cursoController.editCurso)
      .delete('/cursos/:id', cursoController.deleteCurso)

//Rutas notas
router.get('/notas', notasController.getNotas)
      .get('/notas/:idNota', notasController.getNota)
      .post('/notas', notasController.addNota)
      .put('/notas/:id', notasController.editNota)
      .delete('/notas/:id', notasController.deleteNota)

module.exports = router
