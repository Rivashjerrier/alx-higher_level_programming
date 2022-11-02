-- creates the database hbtn_0d_usa and the table cities
-- cities description:
-- id INT unique, auto generated, can’t be null and is a primary key
-- state_id INT, can’t be null and must be a FOREIGN KEY 
-- that references to id of the states table
-- name VARCHAR(256) can’t be null
CREATE DATABASE IF NOT EXIST hbtn_0d_usa;
USE DATABASE hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS cities
(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	state_d INT NOT NULL,
	FOREIGN KEY(state_d) REFERENCES states(id),
	name VARCHAR(256)
);
