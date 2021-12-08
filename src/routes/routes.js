const cursoController = require('../controller/cursoController')
const mainController = require('../controller/mainController')
const notasController = require('../controller/notasController')

module.exports = function(app){
  //Ruta principal
  app.route('/').get(mainController.principal)
  app.route('/guiacursos').get(mainController.guiaCursos)
  app.route('/guianotas').get(mainController.guiaNotas)

  //Rutas cursos
  app.route('/cursos').get(cursoController.getCursos)

  app.route('/cursos/:identificador').get(cursoController.getCurso)

  app.route('/cursos').post(cursoController.addCurso)

  app.route('/cursos/:id').put(cursoController.editCurso)

  app.route('/cursos/:id').delete(cursoController.deleteCurso)

  //Rutas notas
  app.route('/notas').get(notasController.getNotas)

  app.route('/notas/:idNota').get(notasController.getNota)

  app.route('/notas').post(notasController.addNota)

  app.route('/notas/:id').put(notasController.editNota)

  app.route('/notas/:id').delete(notasController.deleteNota)

}
