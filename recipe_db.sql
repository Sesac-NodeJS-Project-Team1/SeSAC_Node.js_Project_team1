CREATE DATABASE recipe default character set utf8 default collate utf8_general_ci;

USE recipe;

DROP TABLE review;
DROP TABLE user_recipe_like;
DROP TABLE user_recipe_picture;
DROP TABLE user_recipe_step;
DROP TABLE user_recipe;
DROP TABLE user;

CREATE TABLE user (
	id varchar(15) not null primary key,
    pw varchar(15) not null,
    name varchar(10) not null,
    tel varchar(13) default "",
    email varchar(30) not null
);

CREATE TABLE user_recipe (
	id int not null primary key auto_increment,
    user_id varchar(15) not null,
    title varchar(100) not null,
    comment mediumtext,
    category_kind varchar(20),
    category_food varchar(20),
    material mediumtext,
    FOREIGN KEY ( user_id ) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE user_recipe_step (
    id int not null primary key auto_increment,
	food_id int,
    FOREIGN KEY ( food_id ) REFERENCES user_recipe(id) ON DELETE CASCADE,
    stage int unsigned,
    description mediumtext
);

CREATE TABLE user_recipe_picture (
    id int not null primary key auto_increment,
	food_id int,
    FOREIGN KEY ( food_id ) REFERENCES user_recipe(id) ON DELETE CASCADE,
    filename varchar(200)
);

CREATE TABLE user_recipe_like (
    id int not null primary key auto_increment,
	user_id varchar(15) not null,
    FOREIGN KEY ( user_id ) REFERENCES user(id) ON DELETE CASCADE,
	food_id int not null,
    FOREIGN KEY ( food_id ) REFERENCES user_recipe(id) ON DELETE CASCADE
);

CREATE TABLE review (
	id int not null primary key auto_increment,
    user_id varchar(15) not null,
    FOREIGN KEY ( user_id ) REFERENCES user(id) ON DELETE CASCADE,
    food_id int not null,
    FOREIGN KEY ( food_id ) REFERENCES user_recipe(id) ON DELETE CASCADE,
    comment mediumtext
);