const alunosRoutes = (app, fs) => {
    // variables
    const dataPath = './data/alunos.json';
  
    // READ
    app.get('/alunos', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = alunosRoutes;