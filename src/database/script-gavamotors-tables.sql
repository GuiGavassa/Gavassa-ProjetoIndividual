
create database gavamotors;

use gavamotors;



-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ----------------------------------------------------- USUÁRIOS ------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

select * from usuario;

-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ----------------------------------------------------- CARROS --------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --

CREATE TABLE carros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    potencia INT NOT NULL,
    ano INT NOT NULL
);


INSERT INTO carros (modelo, marca, potencia, ano) VALUES
('Mitsubishi Lancer Evolution', 'Mitsubishi', 276, 2005),
('Dodge Challenger SRT Demon', 'Dodge', 808, 2018),
('Toyota Supra Mk2 Custom', 'Toyota', 500, 1995), 
('Nissan Skyline R34 Custom', 'Nissan', 276, 1999),
('Porsche 911', 'Porsche', 443, 2020),
('Mazda RX-7 Custom', 'Mazda', 276, 1997);

select * from carros;


CREATE TABLE likes_carros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    carro_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (carro_id) REFERENCES carros(id),
    UNIQUE (usuario_id, carro_id) -- Garante que cada usuário só pode dar um like por carro
);

-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ----------------------------------------------------- FILMES --------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --

CREATE TABLE filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    ano INT
);

INSERT INTO filmes (titulo, descricao, ano) VALUES
('SpeedRacer', 'Piloto de corridas enfrenta desafios em competições de alta velocidade com seu carro especial.', 2008),
('Carros', 'Relâmpago McQueen descobre amizade e humildade em uma pequena cidade após acidente inesperado.', 2006),
('Carros 2', 'Relâmpago McQueen e Mate participam de um campeonato mundial de corridas com espionagem internacional.', 2011),
('Carros 3', 'Relâmpago McQueen enfrenta novos corredores e busca provar que ainda é competitivo.', 2017),
('Velozes e Furiosos', 'Piloto de rua e policial infiltrado enfrentam crimes e corridas ilegais em Los Angeles.', 2001),
('Velozes e Furiosos 2', 'Brian O`Conner e amigo se unem para derrubar um traficante de drogas em Miami.', 2003),
('Velozes e Furiosos - Tokyo', 'Jovem piloto americano se envolve no mundo das corridas de drift em Tóquio.', 2006),
('Velozes e Furiosos 4', 'Dominic Toretto e Brian O `Conner reúnem-se para combater um traficante de drogas.', 2009),
('Velozes e Furiosos 5', 'Grupo de corredores planeja um grande assalto no Brasil enquanto foge das autoridades.', 2011);

SELECT * FROM filmes;


CREATE TABLE likes_filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    filme_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (filme_id) REFERENCES filmes(id),
    UNIQUE (usuario_id, filme_id) -- Garante que cada usuário só pode dar um like por filme
);


-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ----------------------------------------------------- JOGOS ---------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --
-- ---------------------------------------------------------------------------------------------------------------------------- --

CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    desenvolvedor VARCHAR(255),
    ano INT
);

INSERT INTO jogos (titulo, desenvolvedor, ano) VALUES
('MidnightClub L.A Remix', 'Rockstar San Diego', 2008),
('MidnightClub 3 DUB Edition', 'Rockstar San Diego', 2005),
('NeedForSpeed Underground 2', 'EA Black Box', 2004),
('GrandTheftAuto V', 'Rockstar North', 2013),
('GranTurismo 4', 'Polyphony Digital', 2004),
('Forza Horizon 2', 'Playground Games', 2014),
('GrandTheftAuto IV', 'Rockstar North', 2008),
('GrandTheftAuto San Andreas', 'Rockstar North', 2004);

SELECT * FROM Jogos;

CREATE TABLE likes_jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    jogo_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (jogo_id) REFERENCES jogos(id),
    UNIQUE (usuario_id, jogo_id) -- Garante que cada usuário só pode dar um like por jogo
);

select * from likes_jogos;

select
us.nome,
us.email,
jg.titulo,
jg.ano
from jogos jg
join likes_jogos lj on lj.jogo_id = jg.id
join usuario us on lj.usuario_id = us.id;



