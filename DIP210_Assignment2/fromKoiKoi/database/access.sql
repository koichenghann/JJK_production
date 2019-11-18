
/*                   basic query for applicant table.                 */

#retrieve Applicant table
SELECT * FROM Applicant;
#retrieve Applicant by username
SELECT * FROM MHSMYSql.Applicant WHERE username="jeff";
#retrieve Applicant by applicantID
SELECT * FROM MHSMYSql.Applicant WHERE applicantID=1;
#retrieve Applicant by Email
SELECT * FROM MHSMYSql.Applicant WHERE email="jeff@jeff.com";
#validate login
SELECT * FROM MHSMYSql.Applicant WHERE username="jeff" AND password="jeff";
#register
INSERT INTO Applicant VALUES (1, "username", "password", "fullName", "email", 1000);
#update
UPDATE Applicant SET applicantID=0, username="", password="", fullName="", email="", monthlyIncome="";
#delete
DELETE FROM Applicant WHERE applicantID=0;

SELECT username FROM HousingOfficer
UNION
SELECT username FROM Applicant;

SELECT applicantID FROM Applicant ORDER BY applicantID DESC LIMIT 1;


SELECT applicationID FROM Application, Residence, HousingOfficer
WHERE Application.residenceID = Residence.residenceID 
AND Residence.staffID = HousingOfficer.staffID
AND HousingOfficer.staffID = 'admin';

SELECT * FROM Residence;
DROP TABLE residence;
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