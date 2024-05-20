drop database gavamotors;


CREATE DATABASE gavamotors;

USE gavamotors;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table carros(
	id int,
    nomeCarro varchar(30),
    descricao varchar(50),
    potencia int,
    tempoAteCemKM int
);

create table curtidasCarros(
	fkUsuario int,
    fkCarros int,
    primary key (fkUsuario, fkCarros),
    foreign key (fkUsuario) references usuario(id),
    foreign key (fkCarros) references carros(id)
);

select * from usuario;






