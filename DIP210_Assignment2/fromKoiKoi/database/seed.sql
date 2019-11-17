CREATE DATABASE MHSMYSql;
USE MHSMYSql;

CREATE TABLE Applicant (
	applicantID int,
    username varchar(50),
    password varchar(50),
    fullName varchar(50),
    email varchar(100),
    monthlyIncome double
);

#populate Applicant table with dummy data
INSERT INTO Applicant VALUES
	/*applicantID, username, password, fullname, email, monthlyIncome*/
	(1 , "jeff", "jeff", "jeff bezos", "jeff@jeff.com", 1000),
    (2 , "james", "james", "james bond", "james@bond.com", 1100),
    (3 , "john", "john", "john cena", "john@cena.com", 1200)
;


CREATE TABLE HousingOfficer (
	username varchar(50),
    password varchar(50),
    fullName varchar(50),
    staffID varchar(50)
);

#populate HousingOfficer table with dummy data (
INSERT INTO HousingOfficer VALUES
	("admin", "admin", "Administrator", "admin001"),
    ("officer", "officer", "Housing Officer", "officer001");

CREATE TABLE ApplicantAttachment (
	attachmentID int,
    applicantID int,
    content varchar(500),
    description varchar(500)
);

CREATE TABLE Residence (
	residenceID varchar(50),
    residenceName varchar(50),
    address varchar(500),
    unitCount int,
    unitSize double,
    montlyRental double,
    staffID varchar(20)
);


CREATE TABLE Unit (
	unitID int,
    availability boolean,
    residenceID varchar(50)
);

CREATE TABLE Application (
	applicationID int,
    applicantID int,
    residenceID varchar(50),
    applicationDate date,
    requiredMonth int,
    requiredYear int,
    status varchar(50)
);

CREATE TABLE ApplicationAttachment (
	attachmentID int,
    applicationID int,
    content varchar(500),
    description varchar(500)
);

CREATE TABLE Allocation (
	allocationID int,
    applicationID int,
    residenceID varchar(50),
    unitID int,
    fromDate date,
    duration int,
    endDate date
);




DROP database MHSMYSql;
    
    
    