var express = require("express");
var router = express.Router();

var likesController = require("../controllers/likesController");

router.post("/adicionarLikeCarros", function (req, res) {
    likesController.adicionarLikeCarros(req, res);
})

router.post("/removerLikeCarros", function (req, res) {
    likesController.removerLikeCarros(req, res);
})

router.get("/contarLikeCarros", function (req, res) {
    console.log('Rota /likes/contarLikeCarros acessada');
    likesController.contarLikeCarros(req, res);
})

router.post("/obterLikeCarros", function (req, res) {
    console.log('Rota /likes/obterLikeCarros acessada');
    likesController.obterLikeCarros(req, res);
})



router.post("/adicionarLikeFilmes", function (req, res) {
    likesController.adicionarLikeFilmes(req, res);
})

router.post("/removerLikeFilmes", function (req, res) {
    likesController.removerLikeFilmes(req, res);
})

router.get("/contarLikeFilmes", function (req, res) {
    console.log('Rota /likes/contarLikeFilmes acessada');
    likesController.contarLikeFilmes(req, res);
})

router.post("/obterLikesFilmes", function (req, res) {
    console.log('Rota /likes/obterLikeFilmes acessada');
    likesController.obterLikeFilmes(req, res);
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

router.post("/obterLikeJogos", function (req, res) {
    console.log('Rota /likes/obterLikeJogos acessada');
    likesController.obterLikeJogos(req, res);
})

module.exports = router;