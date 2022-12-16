var tcsInterview = function (gradScore,hscScore,sscScore,candidateName) {
console.log(    gradScore>=70 ||hscScore>=80 ||sscScore>=90 ? `Congrates ${candidateName} you are eligible for TCS interview.` :`Unfortunately you are not eligible for interview.` );
}

tcsInterview(80,86,90,"sanket");
tcsInterview(70,65,55,"Akash");
tcsInterview(60,79,88,"sunny");