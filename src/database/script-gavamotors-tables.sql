create database gavamotors;

-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ----------------------------------------------------- USUÁRIOS ------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --

CREATE TABLE gavamotors.usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

select * from gavamotors.usuario;

-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ----------------------------------------------------- CARROS --------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --

CREATE TABLE gavamotors.carros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    potencia INT NOT NULL,
    ano INT NOT NULL
);

INSERT INTO gavamotors.carros (modelo, marca, potencia, ano) VALUES
('Mitsubishi Lancer Evolution', 'Mitsubishi', 276, 2005),
('Dodge Challenger SRT Demon', 'Dodge', 808, 2018),
('Toyota Supra Mk2 Custom', 'Toyota', 500, 1995), 
('Nissan Skyline R34 Custom', 'Nissan', 276, 1999),
('Porsche 911', 'Porsche', 443, 2020),
('Mazda RX-7 Custom', 'Mazda', 276, 1997);

select * from gavamotors.carros;

CREATE TABLE gavamotors.likes_carros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    carro_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (carro_id) REFERENCES carros(id),
    UNIQUE (usuario_id, carro_id) -- Garante que cada usuário só pode dar um like por carro
);

select * from gavamotors.likes_carros;

-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ----------------------------------------------------- FILMES --------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --

CREATE TABLE gavamotors.filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    ano INT
);

INSERT INTO gavamotors.filmes (titulo, descricao, ano) VALUES
('SpeedRacer', 'Piloto de corridas enfrenta desafios em competições de alta velocidade com seu carro especial.', 2008),
('Carros', 'Relâmpago McQueen descobre amizade e humildade em uma pequena cidade após acidente inesperado.', 2006),
('Carros 2', 'Relâmpago McQueen e Mate participam de um campeonato mundial de corridas com espionagem internacional.', 2011),
('Carros 3', 'Relâmpago McQueen enfrenta novos corredores e busca provar que ainda é competitivo.', 2017),
('Velozes e Furiosos', 'Piloto de rua e policial infiltrado enfrentam crimes e corridas ilegais em Los Angeles.', 2001),
('Velozes e Furiosos 2', 'Brian O`Conner e amigo se unem para derrubar um traficante de drogas em Miami.', 2003),
('Velozes e Furiosos - Tokyo', 'Jovem piloto americano se envolve no mundo das corridas de drift em Tóquio.', 2006),
('Velozes e Furiosos 4', 'Dominic Toretto e Brian O `Conner reúnem-se para combater um traficante de drogas.', 2009),
('Velozes e Furiosos 5', 'Grupo de corredores planeja um grande assalto no Brasil enquanto foge das autoridades.', 2011);

SELECT * FROM gavamotors.filmes;

CREATE TABLE gavamotors.likes_filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    filme_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (filme_id) REFERENCES filmes(id),
    UNIQUE (usuario_id, filme_id) -- Garante que cada usuário só pode dar um like por filme
);

select * from gavamotors.likes_filmes;

 -- SELECT DOS DADOS PARA O GRÁFICO DOS FILMES
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

-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ----------------------------------------------------- JOGOS ---------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --

CREATE TABLE gavamotors.jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    desenvolvedor VARCHAR(255),
    ano INT
);

INSERT INTO gavamotors.jogos (titulo, desenvolvedor, ano) VALUES
('MidnightClub L.A Remix', 'Rockstar San Diego', 2008),
('MidnightClub 3 DUB Edition', 'Rockstar San Diego', 2005),
('NeedForSpeed Underground 2', 'EA Black Box', 2004),
('GrandTheftAuto V', 'Rockstar North', 2013),
('GranTurismo 4', 'Polyphony Digital', 2004),
('Forza Horizon 2', 'Playground Games', 2014),
('GrandTheftAuto IV', 'Rockstar North', 2008),
('GrandTheftAuto San Andreas', 'Rockstar North', 2004);

SELECT * FROM gavamotors.Jogos;

CREATE TABLE gavamotors.likes_jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    jogo_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (jogo_id) REFERENCES jogos(id),
    UNIQUE (usuario_id, jogo_id) -- Garante que cada usuário só pode dar um like por jogo
);

select * from gavamotors.likes_jogos;

-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- -------------------------------------------------------- SELECTS ----------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --

-- Gera o numero de jogadores por jogo.
select
jg.titulo as "titulo",
count(jg.titulo) as "QtdLikes"
from gavamotors.jogos jg
join gavamotors.likes_jogos lj on lj.jogo_id = jg.id
join gavamotors.usuario us on lj.usuario_id = us.id
group by jg.titulo;

-- Gera dados dos likes dos jogos.
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

-- Likes em Jogos
SELECT
    us.nome AS usuario_nome,
    us.email AS usuario_email,
    'jogo' AS tipo,
    jg.titulo AS titulo,
    jg.ano AS ano
FROM gavamotors.jogos jg
JOIN gavamotors.likes_jogos lj ON lj.jogo_id = jg.id
JOIN gavamotors.usuario us ON lj.usuario_id = us.id;

-- Likes em Filmes
SELECT
    us.nome AS usuario_nome,
    us.email AS usuario_email,
    'filme' AS tipo,
    fl.titulo AS titulo,
    fl.ano AS ano
FROM gavamotors.filmes fl
JOIN gavamotors.likes_filmes lf ON lf.filme_id = fl.id
JOIN gavamotors.usuario us ON lf.usuario_id = us.id;

-- Likes em Carros
SELECT
    us.nome AS usuario_nome,
    us.email AS usuario_email,
    'carro' AS tipo,
    cr.modelo AS titulo,
    cr.ano AS ano
FROM gavamotors.carros cr
JOIN gavamotors.likes_carros lc ON lc.carro_id = cr.id
JOIN gavamotors.usuario us ON lc.usuario_id = us.id;
