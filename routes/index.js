var express = require('express');
var router = express.Router();
var teste = require("../models/teste")

/* GET home page. */
router.get('/', function(req, res, next) {

  teste.findAll({}).then((dados) => {

    res.render('index', {
      dados: dados
    });

  }).catch((erro) => {

    res.status(500).send("erro ao listar dados")

  })
 
});

router.get("/cadastrar", function(req, res, next){
  res.render("cadastrar")
})

router.post("/cadastrar", function(req, res, next){

  teste.create({
    nome: req.body.nome,
    quantidade: req.body.quantidade,
    descricao: req.body.descricao
  }).then((dados) => {
    res.redirect("/")
  }).catch((erro) => {
    res.status(500).send("erro ao cadastrar dados")
  })

})

router.get("/atualizar/:id", function(req, res, next){
  teste.findOne({
    where: {
      id: req.params.id
    }
  }).then((dados) => {
    res.render("atualizar", {
      dados: dados
    })
  }).catch((erro) => {
    res.status(500).send("Erro ao atualizar dados")
  })
  
})

router.post("/atualizar/:id", function(req, res, next){
  teste.update({
    nome: req.body.nome,
    quantidade: req.body.quantidade,
    descricao: req.body.descricao
  }, {
    where: {
      id: req.params.id
    }
  }).then((dados)=>{

    res.redirect("/")

  }).catch((erro) => {

    res.send("Erro ao cadastrar erros")

  })
})

router.get("/deletar/:id", function(req, res, next) {
  teste.destroy({
    where: {
      id: req.params.id
    }
  }).then((dados) => {
    res.redirect("/")
  }).catch((erro) => {
    res.status(500).send("Erro ao excluir dados")
  })
})

module.exports = router;
