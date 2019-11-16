
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