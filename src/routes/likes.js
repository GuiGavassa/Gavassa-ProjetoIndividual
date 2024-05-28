var express = require("express");
var router = express.Router();

var likesController = require("../controllers/likesController");


router.post("/adicionarLikeJogos", function (req, res) {
    likesController.adicionarLikeJogos(req, res);
})

router.post("/removerLikeJogos", function (req, res) {
    likesController.removerLikeJogos(req, res);
})

module.exports = router;