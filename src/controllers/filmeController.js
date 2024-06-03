var filmeModel = require("../models/filmeModel");

function buscarFilmes(req, res) {


    filmeModel.buscarFilmes()
        .then(
            function (resultadoBuscarFilmes) {
                console.log(`\nResultados encontrados: ${resultadoBuscarFilmes.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoBuscarFilmes)}`); // transforma JSON em String

                if (resultadoBuscarFilmes.length > 0) {
                    console.log(resultadoBuscarFilmes);

                    res.json(resultadoBuscarFilmes);

                } else if (resultadoBuscarFilmes.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {buscarFilmes}