var  applicantList  = [{userID:1, username:"jeff", password:"jeff", fullName:"Jeff Yeoh", email:"jeffyeoh@help.com", monthlyIncome:"2300", attachment: new Array},
                  {userID:2, username:"jacky", password:"jacky", fullName:"Jacky Voon", email:"jv77@gmail.com", monthlyIncome:"3200", attachment: new Array},
                  {userID:3, username:"koi", password:"koi", fullName:"Koi Cheng Hann", email:"koi666@gmail.com", monthlyIncome:"3000", attachment: new Array}];


var inUsername ='user'
var inPassword = '123'
var infullName = 'Han Ren'
var inEmail = 'hanrenguo123@gmail.com'
var inMonthlyIncome = '3400'
var applicant = {userID:2, username:inUsername, password:inPassword, fullName:infullName, email:inEmail, monthlyIncome:inMonthlyIncome, attachment: new Array};
applicantList.push(applicant);

localStorage.applicantList = JSON.stringify(applicantList);


var applicantList2 = JSON.parse(localStorage.applicantList);
console.log(applicantList2);
