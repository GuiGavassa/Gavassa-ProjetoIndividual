
create database gavamotors;

use gavamotors;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE carros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    ano INT NOT NULL
);

CREATE TABLE likes_carros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    carro_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (carro_id) REFERENCES carros(id),
    UNIQUE (usuario_id, carro_id) -- Garante que cada usuário só pode dar um like por carro
);

CREATE TABLE filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    diretor VARCHAR(255),
    ano INT
);

CREATE TABLE likes_filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    filme_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (filme_id) REFERENCES filmes(id),
    UNIQUE (usuario_id, filme_id) -- Garante que cada usuário só pode dar um like por filme
);

CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    desenvolvedor VARCHAR(255),
    ano INT
);

CREATE TABLE likes_jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    jogo_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (jogo_id) REFERENCES jogos(id),
    UNIQUE (usuario_id, jogo_id) -- Garante que cada usuário só pode dar um like por jogo
);