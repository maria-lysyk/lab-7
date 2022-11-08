function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}


function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var phone = document.Form.phone.value;
    var country = document.Form.country.value;
    var gender = document.Form.gender.value;
    var password = document.Form.psw.value;
    

    var nameErr = emailErr = phoneErr = countryErr = genderErr = passwordErr = true;
    

    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    

    if(email == "") {
        printError("emailErr", "Please enter your email");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
    if(phone == "") {
        printError("phoneErr", "Please enter your phone");
        var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[0-9]\d{9}$/;
        if(regex.test(phone) === false) {
            printError("phoneErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("phoneErr", "");
            phoneErr = false;
            var elem = document.getElementById("phone");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if(password == "") {
        printError("passwordErr", "Please enter your password");
        var elem = document.getElementById("psw");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if(regex.test(password) === false) {
            printError("passwordErr", "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character");
            var elem = document.getElementById("psw");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("passwordErr", "");
            passwordErr = false;
            var elem = document.getElementById("psw");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    

    if(country == "Select") {
        printError("countryErr", "Please select your country");
        var elem = document.getElementById("country");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("countryErr", "");
        countryErr = false;
        var elem = document.getElementById("country");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    
    if(gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }

    if((nameErr || emailErr | phoneErr || countryErr || passwordErr || genderErr) == true) {
       return false;
    } 
};