create database gavamotors;

use gavamotors;

create table usuario(
	id int auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    primary key (id)
);

select * from usuario;

