var likesModel = require("../models/likesModel");



function adicionarLikeJogos(req, res) {
    var usuario = req.body.usuarioID;
    var like = req.body.like;

    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (like == undefined) {
        res.status(400).send("Seu jogo está indefinida!");
    } else {
        likesModel.adicionarLikeJogos(usuario, like)
            .then(
                function (resultadoAdicionarLike) {
                    console.log(`\nResultados encontrados: ${resultadoAdicionarLike.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAdicionarLike)}`); // transforma JSON em String

                    if (resultadoAdicionarLike.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAdicionarLike[0].id,
                            usuario: resultadoAdicionarLike[0].usuario,
                            like: resultadoAdicionarLike[0].like
                        });


                    } else if (resultadoAdicionarLike.length == 0) {
                        res.status(403).send("Like Inválido");
                    } else {
                        res.status(403).send("Usuário já inseriu Like.");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao tentar adicionar o like! Erro: Cheguei ate aqui no controller ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function removerLikeJogos(req, res) {
    var usuario = req.body.usuarioID;
    var like = req.body.like;

    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (like == undefined) {
        res.status(400).send("Seu jogo está indefinida!");
    } else {
        likesModel.removerLikeJogos(usuario, like)
            .then(
                function (resultadoRemoverLike) {
                    console.log(`\nResultados encontrados: ${resultadoRemoverLike.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoRemoverLike)}`); // transforma JSON em String

                    if (resultadoRemoverLike.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoRemoverLike[0].id,
                            usuario: resultadoRemoverLike[0].usuario,
                            like: resultadoRemoverLike[0].like
                        });


                    } else if (resultadoAdicionarLike.length == 0) {
                        res.status(403).send("Like Inválido");
                    } else {
                        res.status(403).send("Usuário já inseriu Like.");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao tentar adicionar o like! Erro: Cheguei ate aqui no controller ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}






module.exports = {
    adicionarLikeJogos,
    removerLikeJogos
}