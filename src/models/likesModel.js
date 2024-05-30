var database = require("../database/config")


function adicionarLikeCarros(usuario, like) {
    console.log("ACESSEI O LIKES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, like);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO likes_carros (usuario_id, carro_id) VALUES (${usuario}, ${like});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function removerLikeCarros(usuario, like) {
    console.log("ACESSEI O LIKES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, like);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        DELETE FROM likes_carros WHERE usuario_id = ${usuario} AND carro_id = ${like};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarLikeCarros(usuario, like) {
    console.log("ACESSEI O LIKES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, like);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    SELECT
    cr.modelo AS "modelo",
    COUNT(lc.carro_id) AS "QtdLikes"
    FROM
    gavamotors.carros cr
    LEFT JOIN
    gavamotors.likes_carros lc ON lc.carro_id = cr.id
    GROUP BY
    cr.modelo
    ORDER BY
    COUNT(lc.carro_id) DESC;


    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}








function adicionarLikeFilmes(usuario, like) {
    console.log("ACESSEI O LIKES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, like);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO likes_filmes (usuario_id, filme_id) VALUES (${usuario}, ${like});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function removerLikeFilmes(usuario, like) {
    console.log("ACESSEI O LIKES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, like);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        DELETE FROM likes_filmes WHERE usuario_id = ${usuario} AND filme_id = ${like};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarLikeFilmes(usuario, like) {
    console.log("ACESSEI O LIKES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, like);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    SELECT
    fm.titulo AS "titulo",
    COUNT(lf.filme_id) AS "QtdLikes"
    FROM
    gavamotors.filmes fm
    LEFT JOIN
    gavamotors.likes_filmes lf ON lf.filme_id = fm.id
    GROUP BY
    fm.titulo
    ORDER BY
    COUNT(lf.filme_id) DESC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}









function adicionarLikeJogos(usuario, like) {
    console.log("ACESSEI O LIKES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, like);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO likes_jogos (usuario_id, jogo_id) VALUES (${usuario}, ${like});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function removerLikeJogos(usuario, like) {
    console.log("ACESSEI O LIKES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, like);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        DELETE FROM likes_jogos WHERE usuario_id = ${usuario} AND jogo_id = ${like};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarLikeJogos(usuario, like) {
    console.log("ACESSEI O LIKES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, like);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    SELECT
    jg.titulo AS "titulo",
    COUNT(lj.jogo_id) AS "QtdLikes"
    FROM
    gavamotors.jogos jg
    LEFT JOIN
    gavamotors.likes_jogos lj ON lj.jogo_id = jg.id
    LEFT JOIN
    gavamotors.usuario us ON lj.usuario_id = us.id
    GROUP BY
    jg.titulo
    ORDER BY
    COUNT(lj.jogo_id) DESC; -- Ordenando pelo número de likes em ordem decrescente

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    adicionarLikeCarros,
    removerLikeCarros,
    contarLikeCarros,
    adicionarLikeFilmes,
    removerLikeFilmes,
    contarLikeFilmes,
    adicionarLikeJogos,
    removerLikeJogos,
    contarLikeJogos
};