CREATE TABLE cars
(
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    manufacturer VARCHAR(50) NOT NULL,
    year INT(11) NOT NULL,
    type VARCHAR(50) NOT NULL
);
CREATE UNIQUE INDEX cars_id_uindex ON cars (id);
CREATE TABLE ownerships
(
    car_id INT(11) NOT NULL,
    person_id INT(11) NOT NULL,
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    CONSTRAINT ownerships_cars_id_fk FOREIGN KEY (car_id) REFERENCES cars (id) ON DELETE CASCADE,
    CONSTRAINT ownerships_person_id_fk FOREIGN KEY (person_id) REFERENCES people (id) ON DELETE CASCADE
);
CREATE INDEX ownerships_cars_id_fk ON ownerships (car_id);
CREATE UNIQUE INDEX ownerships_id_uindex ON ownerships (id);
CREATE INDEX ownerships_person_id_fk ON ownerships (person_id);
CREATE TABLE people
(
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INT(11) NOT NULL
);
CREATE UNIQUE INDEX person_id_uindex ON people (id);