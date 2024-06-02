var express = require("express");
var router = express.Router();

var carroController = require("../controllers/carroController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/buscarCarros", function (req, res) {
    carroController.buscarCarros(req, res);
})



module.exports = router;