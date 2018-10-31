CREATE DATABASE myfitnessjournal_db;

USE myfitnessjournal_db;

CREATE TABLE userprofile (
	id INT NOT NULL AUTO_INCREMENT,
    userMotto VARCHAR(255) NOT NULL,
	userName VARCHAR(255) NOT NULL,
	userAge INT NOT NULL,
    userWeight INT NOT NULL,
	userGoal VARCHAR(255) NOT NULL,
	userGoalStatus VARCHAR(255) NOT NULL
    userExercises VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE journal (
	id INT NOT NULL AUTO_INCREMENT,
	title TEXT NOT NULL,
    date DEFAULT CURRENT_DATE,
	notes TEXT NOT NULL
	PRIMARY KEY (id),
	-- FOREIGN KEY (product_id) REFERENCES products(id)
);