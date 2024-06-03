var express = require("express");
var router = express.Router();

var filmeController = require("../controllers/filmeController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/buscarFilmes", function (req, res) {
    filmeController.buscarFilmes(req, res);
})



module.exports = router;