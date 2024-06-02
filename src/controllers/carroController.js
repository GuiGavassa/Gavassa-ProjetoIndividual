var carroModel = require("../models/carroModel");

function buscarCarros(req, res) {


    carroModel.buscarCarros()
        .then(
            function (resultadoBuscarCarros) {
                console.log(`\nResultados encontrados: ${resultadoBuscarCarros.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoBuscarCarros)}`); // transforma JSON em String

                if (resultadoBuscarCarros.length > 0) {
                    console.log(resultadoBuscarCarros);

                    res.json(resultadoBuscarCarros);


                } else if (resultadoBuscarCarros.length == 0) {
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

module.exports = {buscarCarros}