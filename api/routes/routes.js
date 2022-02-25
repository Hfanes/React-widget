// load up our shiny new route for users
const alunosRoutes = require('./alunos');
const diretorEscolaRoutes = require('./diretorescola');
const diretorCursoRoutes = require('./diretorcurso');

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  app.post('/', function(req, res, next) {
   });

  // run our user route module here to complete the wire up
  alunosRoutes(app, fs);
  diretorCursoRoutes(app, fs);
  diretorEscolaRoutes(app, fs);
};

module.exports = appRouter;