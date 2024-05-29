var likesModel = require("../models/likesModel");

function adicionarLikeCarros(req, res) {
    var usuario = req.body.usuarioID;
    var like = req.body.like;

    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (like == undefined) {
        res.status(400).send("Seu filme está indefinida!");
    } else {
        likesModel.adicionarLikeCarros(usuario, like)
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


function removerLikeCarros(req, res) {
    var usuario = req.body.usuarioID;
    var like = req.body.like;

    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (like == undefined) {
        res.status(400).send("Seu filme está undefined!");
    } else {
        likesModel.removerLikeCarros(usuario, like)
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
                    console.log("\nHouve um erro ao tentar remover o like! Erro: Cheguei ate aqui no controller ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function adicionarLikeFilmes(req, res) {
    var usuario = req.body.usuarioID;
    var like = req.body.like;

    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (like == undefined) {
        res.status(400).send("Seu jogo está indefinida!");
    } else {
        likesModel.adicionarLikeFilmes(usuario, like)
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


function removerLikeFilmes(req, res) {
    var usuario = req.body.usuarioID;
    var like = req.body.like;

    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (like == undefined) {
        res.status(400).send("Seu jogo está indefinida!");
    } else {
        likesModel.removerLikeFilmes(usuario, like)
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
                    console.log("\nHouve um erro ao tentar remover o like! Erro: Cheguei ate aqui no controller ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

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
                    console.log("\nHouve um erro ao tentar remover o like! Erro: Cheguei ate aqui no controller ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function contarLikeJogos(req, res) {
    likesModel.contarLikeJogos()
      .then(function (resultadoContarLike) {
        console.log(`\nResultados encontrados: ${resultadoContarLike.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoContarLike)}`);
  
        if (resultadoContarLike.length == 1) {
          console.log(resultadoContarLike);
  
          res.json({
            jogo: resultadoContarLike[0].titulo,
            qtdLikes: resultadoContarLike[0].QtdLikes
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao tentar adicionar o like! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
  


module.exports = {
    adicionarLikeCarros,
    removerLikeCarros,
    adicionarLikeFilmes,
    removerLikeFilmes,
    adicionarLikeJogos,
    removerLikeJogos,
    contarLikeJogos
}