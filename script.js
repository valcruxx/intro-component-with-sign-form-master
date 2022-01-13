var firstError = document.getElementsByClassName("error")[0];
var secondError = document.getElementsByClassName("error")[1];
var thirdError = document.getElementsByClassName("error")[2];
var fourthError = document.getElementsByClassName("error")[3];
var button = document.getElementById("button");
var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var myEmail = document.getElementById("email");
var password = document.getElementById("pword");


button.onclick = function(){

    if(
        fName.value == ""
    ) {
            firstError.style.display ="block";
            fName.style.border = "1px solid hsl(0, 100%, 74%)";
            fName.style.marginBottom = "0px";
            fName.style.background = "url(images/icon-error.svg)";
            fName.style.backgroundRepeat = "no-repeat"
            fName.style.backgroundPosition = "95% 50%"}
    else{};


        if(
            lName.value == ""
        ) {
                secondError.style.display ="block";
                lName.style.border = "1px solid hsl(0, 100%, 74%)";
                lName.style.marginBottom = "0px";
                lName.style.background = "url(images/icon-error.svg)";
                lName.style.backgroundRepeat = "no-repeat"
                lName.style.backgroundPosition = "95% 50%"}
        else{};
        if(
            myEmail.value == ""
        ) {
                thirdError.style.display ="block";
                myEmail.style.border = "1px solid hsl(0, 100%, 74%)";
                myEmail.style.marginBottom = "0px";
                myEmail.value = "email@example.com";
                myEmail.style.background = "url(images/icon-error.svg)";
                myEmail.style.backgroundRepeat = "no-repeat"
                myEmail.style.backgroundPosition = "95% 50%"

        }
        else{};
        if(
            password.value == ""
        ) {
                fourthError.style.display ="block";
                password.style.border = "1px solid hsl(0, 100%, 74%)";
                password.style.marginBottom = "0px";
                password.style.background = "url(images/icon-error.svg)";
                password.style.backgroundRepeat = "no-repeat"
                password.style.backgroundPosition = "95% 50%"
        }
        else{}
           
};





