CREATE TABLE PersonBackup LIKE `Person`;
INSERT INTO `PersonBackup` SELECT * FROM `Person`;
SELECT  min(Length(`email`)) AS emaillen FROM Person;
SELECT  min(Length(`email`)) FROM Person;
SELECT  Max(Length(`email`)) FROM Person;
SELECT  Length(`email`) FROM Person;
SELECT  count(`email`) FROM Person;
SELECT distinct  "amar" FROM Person;
SELECT "amar" FROM Person;

/*Following query is wronf as count(email) is aggregated and email is non aggregated*/
SELECT count(email), email FROM Person;

SELECT count(email) FROM Person;
SELECT  email FROM Person;
SELECT  email FROM Person WHERE id = 23;
SELECT email FROM Person WHERE id = 45

/*SQL regex usage*/
SELECT DISTINCT CITY FROM STATION RLIKE '^[AEIOU].*';

SELECT DISTINCT city
FROM   station
WHERE  city RLIKE '^[aeiouAEIOU].*[aeiouAEIOU]$';


#Create table employment history for persons in person table person.id is #foriegn key in this new table


DROP TABLE IF EXISTS `EmploymentHistory`;

CREATE TABLE `EmploymentHistory`(
    id INT(5) AUTO_INCREMENT NOT NULL ,
    personId INT(5) NOT NULL,
    jobTitle VARCHAR(50) NOT NULL,
    company VARCHAR(20),
    PRIMARY KEY(id),  FOREIGN KEY(personId) REFERENCES  Person(id)
);

INSERT INTO `EmploymentHistory` (personId, jobTitle,company) SELECT p.id , "web app developer", "apple" FROM Person p WHERE `first_name` = "Amar";
INSERT INTO `EmploymentHistory` (personId, jobTitle, company) SELECT p.`id` , "front end engg","travix" FROM Person p WHERE `first_name` = "Amar";
INSERT INTO `EmploymentHistory` (personId, jobTitle) SELECT p.`id` , "Hr manager" FROM Person p WHERE `first_name` RLIKE '^[az].*' LIMIT 1,10;

# create table which has result of inner join of two table - person and 
# employment

DROP TABLE IF EXISTS `InnerjoinResult`;

CREATE TABLE InnerjoinResult (
    id INT(5)  AUTO_INCREMENT NOT NULL  PRIMARY KEY ,
    company VARCHAR(20), jobTitle VARCHAR(50), 
    fullname VARCHAR(50)
 );

INSERT INTO `InnerjoinResult` (company, jobTitle,fullname )
SELECT `EmploymentHistory`.`company`, `EmploymentHistory`.`jobTitle`, CONCAT(`Person`.`first_name`, `Person`.`last_name`) 
FROM `EmploymentHistory` INNER JOIN `Person` ON `EmploymentHistory`.`personId` = `Person`.`id`;

# Inner join using three tables
# ------------------------------------


SELECT Person.`id`, CONCAT(Person.first_name," ", Person.`last_name`) AS fullName, EmploymentHistory.`id`, EmploymentHistory.`personId`, EmploymentHistory.`jobTitle`, EmploymentHistory.`company`,EmploymentHisotryRel.`id`,`EmploymentHisotryRel`.`employmentHistoryId`, `EmploymentHisotryRel`.`projectsCompleted`, `EmploymentHisotryRel`.`projectComplexity`
FROM `Person`
INNER JOIN `EmploymentHistory` ON Person.`id` = `EmploymentHistory`.`personId`
INNER JOIN `EmploymentHisotryRel` ON `EmploymentHistory`.`id` = `EmploymentHisotryRel`.`employmentHistoryId`;

# -----------------------------------------
# insert statements for these three relational tables
#
# PERSON  ===>>  EMPLOYMENTHISTORY  ==>>  EMPLOYMENTHISOTRYREL

INSERT INTO `Person` (first_name, last_name, email, gender) VALUE ("Shableen", "Sandhu", "shableen@gmail.com", "females");

INSERT INTO `EmploymentHistory` (`personId`, `jobTitle`, `company`) SELECT p.id, "RN 1","Methodist Hospital" FROM `Person` p WHERE `first_name` = "Shableen";
INSERT INTO `EmploymentHistory` (`personId`, `jobTitle`, `company`) SELECT p.id, "RN 1","Good Samaritan Hospitall" FROM `Person` p WHERE `first_name` = "Shableen";

INSERT INTO `EmploymentHisotryRel` (`employmentHistoryId`, `projectsCompleted`, `projectComplexity`) SELECT eh.id, "telemetry night",5 FROM `EmploymentHistory` eh WHERE `personId` = (SELECT id FROM `Person` WHERE `first_name` = "Shableen") AND `company` = "Methodist Hospital";
INSERT INTO `EmploymentHisotryRel` (`employmentHistoryId`, `projectsCompleted`, `projectComplexity`) SELECT eh.id, "ICU night",20 FROM `EmploymentHistory` eh WHERE `personId` = (SELECT id FROM `Person` WHERE `first_name` = "Shableen") AND `company` = "Methodist Hospital";

INSERT INTO `EmploymentHisotryRel` (`employmentHistoryId`, `projectsCompleted`, `projectComplexity`) SELECT eh.id, "telemetry day",4 FROM `EmploymentHistory` eh WHERE `personId` = (SELECT id FROM `Person` WHERE `first_name` = "Shableen") AND `company` = "Good Samaritan Hospitall";
INSERT INTO `EmploymentHisotryRel` (`employmentHistoryId`, `projectsCompleted`, `projectComplexity`) SELECT eh.id, "ICU day",18 FROM `EmploymentHistory` eh WHERE `personId` = (SELECT id FROM `Person` WHERE `first_name` = "Shableen") AND `company` = "Good Samaritan Hospitall";

/*
Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
*/

SELECT CITY, LENGTH(CITY)
FROM STATION
WHERE LENGTH(CITY) = (
    SELECT MIN(LENGTH(CITY))
    FROM STATION
)
ORDER BY CITY ASC LIMIT 1;
SELECT CITY, LENGTH(CITY)
FROM STATION
WHERE LENGTH(CITY) = (
    SELECT MAX(LENGTH(CITY))
    FROM STATION
) 
ORDER BY CITY ASC LIMIT 1;

/*Aggregation */
SELECT COUNT(`NAME`)
FROM CITY 
WHERE POPULATION > 100000;

SELECT SUM(`POPULATION`)
FROM CITY
WHERE DISTRICT = "CALIFORNIA";

SELECT FLOOR(AVG(`POPULATION`))
FROM CITY;

SELECT MAX(`POPULATION`)-MIN(`POPULATION`)
FROM CITY;

SELECT CEIL(AVG(Salary)-AVG(REPLACE(Salary,0,"")))
FROM EMPLOYEES;

/*
We define an employee's total earnings to be their monthly salary x months worked, and the maximum total earnings to be the maximum total earnings for any employee in the Employee table. Write a query to find the maximum total earnings for all employees as well as the total number of employees who have maximum total earnings. Then print these values as 2 space-separated integers.
*/


SELECT salary*months AS total, count(salary*months)
FROM Employee
WHERE salary*months = (
    SELECT MAX(salary*months)
    FROM Employee
) 
GROUP BY salary*months;

/*Query the Name of any student in STUDENTS who scored higher than 75 Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.*/

SELECT NAME
FROM STUDENTS
WHERE MARKS > 75
ORDER BY RIGHT(NAME,3), ID;


/*
Query the sum of Northern Latitudes (LAT_N) from STATION having values greater than 38.7880 and less than 137.2345 Truncate your answer to 4 decimal places.*/


SELECT TRUNCATE(SUM(LAT_N),4)
FROM STATION
WHERE LAT_N BETWEEN 38.7880 AND 137.2345;


/*--Triggers--*/

DELIMITER $$
CREATE TRIGGER insertTriggerOnPerson
AFTER INSERT ON `Person`
FOR EACH ROW 
BEGIN
INSERT INTO `PersonLog` (`FirstName`, `email`, `gender`, `enrolledDate`) 
VALUES (new.`first_name`, new.`email`,new.`gender`, now());
END $$
DELIMITER ;


/*----------------------*/







