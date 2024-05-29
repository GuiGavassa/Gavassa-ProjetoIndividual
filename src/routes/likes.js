var express = require("express");
var router = express.Router();

var likesController = require("../controllers/likesController");

router.post("/adicionarLikeCarros", function (req, res) {
    likesController.adicionarLikeCarros(req, res);
})

router.post("/removerLikeCarros", function (req, res) {
    likesController.removerLikeCarros(req, res);
})

router.post("/adicionarLikeFilmes", function (req, res) {
    likesController.adicionarLikeFilmes(req, res);
})

router.post("/removerLikeFilmes", function (req, res) {
    likesController.removerLikeFilmes(req, res);
})

router.post("/adicionarLikeJogos", function (req, res) {
    likesController.adicionarLikeJogos(req, res);
})

router.post("/removerLikeJogos", function (req, res) {
    likesController.removerLikeJogos(req, res);
})

router.get("/contarLikeJogos", function (req, res) {
    console.log('Rota /likes/contarLikeJogos acessada');
    likesController.contarLikeJogos(req, res);
})

module.exports = router;