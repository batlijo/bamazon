DROP DATABASE IF EXISTS bamazon;
create database bamazon;
use bamazon;

create table products (
ID int auto_increment,
product_name varchar (100),
department_name varchar(100) NOT NULL,
price integer,
stock_quantity integer,
primary key(ID)
);