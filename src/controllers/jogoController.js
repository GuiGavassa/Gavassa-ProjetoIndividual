var jogoModel = require("../models/jogoModel");

function buscarJogos(req, res) {


    jogoModel.buscarJogos()
        .then(
            function (resultadoBuscarJogos) {
                console.log(`\nResultados encontrados: ${resultadoBuscarJogos.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoBuscarJogos)}`); // transforma JSON em String

                if (resultadoBuscarJogos.length > 0) {
                    console.log(resultadoBuscarJogos);

                    res.json(resultadoBuscarJogos);


                } else if (resultadoBuscarJogos.length == 0) {
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

module.exports = {buscarJogos}