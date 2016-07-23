var Cargo       = require('../models/cargo');
var Func       = require('../models/func');

module.exports = function (app, express)
{

  var apiRouter = express.Router();

  // api endpoint to get product information
  apiRouter.get('/cargo', function(req, res) {

    Cargo.find({}, function(err, funcoes){
      if (err) {
        console.log('erro na leitura da col Cargo...', err);
        res.json({err: err});
      } else {
        res.json({dados: funcoes});
      };
    });
  });

  apiRouter.get('/cargo/:cod', function(req, res) {

    Cargo.findOne({ cod: req.params.cod }, function(err, funcoes){
      if (err) {
        console.log('erro na leitura da col Cargo...', err);
        res.json({err: err});
      } else {
        res.json({dados: funcoes});
      };
    });
  });

  apiRouter.get('/func', function(req, res) {

    Func.find({}, function(err, funcoes){
      if (err) {
        console.log('erro na leitura da col Func...', err);
        res.json({err: err});
      } else {
        res.json({dados: funcoes});
      };
    });
  });

  apiRouter.get('/func/:cod', function(req, res) {

    Func.findOne({ cod: req.params.cod }, function(err, funcoes){
      if (err) {
        console.log('erro na leitura da col Func...', err);
        res.json({err: err});
      } else {
        res.json({dados: funcoes});
      };
    });
  });
/*
  apiRouter.get('/func-nome/:cod', function(req, res) {

    Func.findOne({ cod: req.params.cod })
    .select('nome')
    .exec(function(err, funcoes){
      if (err) {
        console.log('erro na leitura da col Func...', err);
        res.json({err: err});
      } else {
        res.json({dados: funcoes});
      };
    });
  });
  */
  return apiRouter;

};
