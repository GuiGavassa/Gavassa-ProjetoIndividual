var database = require("../database/config")


function buscarCarros() {
    console.log("ACESSEI O CARRO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco")
    var instrucaoSql = 
    `
    select * from gavamotors.carros;;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {buscarCarros}