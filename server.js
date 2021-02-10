const express = require("express");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://lucas:Lucas11@cluster0.4v1d4.mongodb.net/DevelopmentTeste?retryWrites=true&w=majority');  
var Schema = mongoose.Schema;
mongoose.Schema.Types.String.checkRequired(v => v != '');

var userDataSchema = new Schema({  
 materia: {type: String, required: true},  
 hora: {type: String, required: true}
}, {collection: 'data'});  
  
var Materias = mongoose.model('UserData', userDataSchema);

app.listen(8000, "127.0.0.1");
console.log("Conectado na porta 8000")

app.route('/')
.get((req, res) => {
  var diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  var dataDeHoje = new Date();
  materiasDoDia = []
  Materias.find()  
  .then(function(disciplinas) {
  disciplinas.forEach(disciplina => {
  if (disciplina.hora.toUpperCase() == diasDaSemana[dataDeHoje.getDay()].toUpperCase())
    materiasDoDia.push(disciplina)
  });
  res.render('index.ejs', {data: materiasDoDia});
  })
})

app.route('/post')
.get(function(req, res) {
  res.redirect(200, '/')
})
.post(function(req, res, next) {
  item = {
    materia: req.body.materia,
    hora: req.body.hora
  }
  var dados = new Materias(item)
  dados.save(function(err) {
    if (err) return console.log(err)
    else
      if (item.materia == "materiaTeste")
        res.json({materia: item.materia, hora: item.hora})
      else
        res.redirect("/")
})})

app.route('/del/:id')
.get((req, res) => {
  var id = req.params.id
  Materias.findById(id)
  .then(function(disciplinaEncontrada) {
    Materias.findByIdAndRemove(id).exec()
    if (disciplinaEncontrada.materia == "materiaTeste")
      res.json({message: "Disciplina deletada!"})
    else
      res.redirect("/")
    })
})

module.exports = { app, Materias }