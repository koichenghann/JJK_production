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
	("admin", "admin", "Administrator", "admin"),
    ("officer", "officer", "Housing Officer", "officer");

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
INSERT INTO residence VALUES 
('R001','Tolong Jaya Condominium','Jalan Semantan, Bukit Damansara, 50490 Kuala Lumpur','120','735','850','admin'),
('R002','Desa Damansara Condominium','Jalan Setiakasih, Bukit Damansara, 50490 Kuala Lumpur','85','780','880','admin'),
('R003','Park Seven Condominium','Jalan Tujuh, Kuala Lumpur City Centre, 50450 Kuala Lumpur','85','780','880','admin'),
('R004','One KL','Jalan Satu, Kuala Lumpur City Centre, 50450 Kuala Lumpur','50','930','950','admin'),
('R005','Le Chato Apartments','Jalan Raya, Bukit Seputeh, 50460 Kuala Lumpur','100','620','600','admin'),
('R006','Taman Bantu Jaya','Jalan Duta, Bukit Damansara, 50490 Kuala Lumpur','100','620','600','admin'),
('R007','Apartment Prima','Jalan Prima 2, Kepong, 52100 Kuala Lumpur','110','700','750','admin'),
('R008','Nova 2 Apartment','Jalan Nova 2, Bukit Segambut, 51200 Kuala Lumpur','110','700','750','admin'),
('R009','Setiawangsa Residence','Jalan Setia, Bukit Dinding, 54200 Kuala Lumpur','200','880','900','admin'),
('R010','Residensi Razakmas','Jalan Bakti, Bandar Tun Razak, 56000 Kuala Lumpur','200','880','900','admin'),
('R011','Taman Sungai Sangat Bersih','Jalan Sangat Bersih, Sungai Besi, 57000 Kuala Lumpur','70','630','599','admin'),
('R012','Kepong Jaya Condominium','Jalan Kepong Baru, Kepong, 52100 Kuala Lumpur','70','630','599','admin');

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
INSERT INTO Application VALUES
(1, 1, 'R001', '2017-6-15', '10', '2020', 'new');

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
