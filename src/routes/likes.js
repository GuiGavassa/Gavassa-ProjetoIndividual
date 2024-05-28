var express = require("express");
var router = express.Router();

var likesController = require("../controllers/likesController");


router.post("/adicionarLike", function (req, res) {
    likesController.adicionarLike(req, res);
})

router.post("/removerLike", function (req, res) {
    likesController.removerLike(req, res);
})

module.exports = router;