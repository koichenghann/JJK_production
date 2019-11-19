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
    monthlyRental double,
    amenities varchar(500),
    staffID varchar(20)
);
INSERT INTO residence VALUES 
('R001','Tolong Jaya Condominium','Jalan Semantan, Bukit Damansara, 50490 Kuala Lumpur','120','735','850','walking distance to MRT station','admin'),
('R002','Desa Damansara Condominium','Jalan Setiakasih, Bukit Damansara, 50490 Kuala Lumpur','85','780','880','walking distance to MRT station','admin'),
('R003','Park Seven Condominium','Jalan Tujuh, Kuala Lumpur City Centre, 50450 Kuala Lumpur','85','780','880','walking distance to MRT station','admin'),
('R004','One KL','Jalan Satu, Kuala Lumpur City Centre, 50450 Kuala Lumpur','50','930','950','walking distance to MRT station','admin'),
('R005','Le Chato Apartments','Jalan Raya, Bukit Seputeh, 50460 Kuala Lumpur','100','620','600','walking distance to MRT station','admin'),
('R006','Taman Bantu Jaya','Jalan Duta, Bukit Damansara, 50490 Kuala Lumpur','100','620','600','walking distance to MRT station','admin'),
('R007','Apartment Prima','Jalan Prima 2, Kepong, 52100 Kuala Lumpur','110','700','750','walking distance to MRT station','admin'),
('R008','Nova 2 Apartment','Jalan Nova 2, Bukit Segambut, 51200 Kuala Lumpur','110','700','750','walking distance to MRT station','admin'),
('R009','Setiawangsa Residence','Jalan Setia, Bukit Dinding, 54200 Kuala Lumpur','200','880','900','walking distance to MRT station','admin'),
('R010','Residensi Razakmas','Jalan Bakti, Bandar Tun Razak, 56000 Kuala Lumpur','200','880','900','walking distance to MRT station','admin'),
('R011','Taman Sungai Sangat Bersih','Jalan Sangat Bersih, Sungai Besi, 57000 Kuala Lumpur','70','630','599','walking distance to MRT station','admin'),
('R012','Kepong Jaya Condominium','Jalan Kepong Baru, Kepong, 52100 Kuala Lumpur','70','630','599','walking distance to MRT station','admin');

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
(0, 1, 'R001', '2017-6-15', '10', '2020', 'accepted'),
(1, 1, 'R001', '2017-6-15', '10', '2020', 'new'),
(2, 1, 'R001', '2017-6-15', '10', '2020', 'new'),
(3, 1, 'R001', '2017-6-15', '10', '2020', 'new'),
(4, 1, 'R001', '2017-6-15', '10', '2020', 'new'),
(5, 1, 'R001', '2017-6-15', '10', '2020', 'new'),
(6, 1, 'R001', '2017-6-15', '10', '2020', 'new'),
(7, 1, 'R001', '2017-6-15', '10', '2020', 'new'),
(8, 1, 'R001', '2017-6-15', '10', '2020', 'new');
drop table application;
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
INSERT INTO Allocation VALUES
(0, 0, 'R001', 0, '2020-1-1', 12 ,'2021-1-1');
SELECT  * FROM Allocation;
