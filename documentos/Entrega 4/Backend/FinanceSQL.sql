drop database if exists Datafinance;
create database DataFinance;
use DataFinance;
drop table membro;
drop table interessado;
drop table mailing;


create table membro(
id_membro int auto_increment primary key,
email_membro varchar(80) not null unique,
nome_membro varchar (50) not null,
telefone varchar(20),
data_inscricao timestamp default current_timestamp
);

create table interessado (
id int auto_increment primary key,
email_interessado varchar(80) not null unique,
nome_interessado varchar(50) not null,
telefone_interessado varchar(20),
data_inscricao timestamp default current_timestamp
);

CREATE USER adminfecapfinance@'179.135.143.62' IDENTIFIED BY 'Finance123';
GRANT ALL PRIVILEGES ON fecap_finance.* TO adminfecapfinance@'179.135.143.62';

