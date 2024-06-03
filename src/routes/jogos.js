var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/buscarJogos", function (req, res) {
    jogoController.buscarJogos(req, res);
})



module.exports = router;