DROP TABLE IF EXISTS EMPLOYEE;
CREATE TABLE EMPLOYEE
(
    id integer NOT NULL AUTO_INCREMENT,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    email varchar(255),
    phoneNumber varchar(255),
    hireDate date,
    salary integer,
    commissionPct integer,
    primary key(id)
);