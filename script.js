
//Form Check Function
function formCheck(){

  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

//-----------------------------------------------------------------------------------------------------------------
  //Name Validation
    if(name == ""){
      alert('Name cannot be empty!');
      return false;
    }

 //Name Pattern Check
    var regForNameSurname = /^[A-Za-z ]+$/;

    if (!regForNameSurname.test(name)) {
      alert("Check name if it contains number or non English letter");
      return false;
    }
//-----------------------------------------------------------------------------------------------------------------

  //Surname Validation
    if(surname == ""){
      alert('Surname cannot be empty!');
      return false;
    }

 	//Surname Pattern Check
    if (!regForNameSurname.test(surname)) {
      alert("Check surname if it contains number or non English letter");
      return false;
    }
  
//-----------------------------------------------------------------------------------------------------------------
  //Email Validation
  if(email == ""){
    alert('Email cannot be empty!');
    return false;
  }

  //Email Pattern Check
  var regForEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (!regForEmail.test(email)) {
    alert("Email must be like this = tugbaturkoglu@eskisehir.edu.tr");
    return false;
  }

//-----------------------------------------------------------------------------------------------------------------
  //Password Validation
  if(password== ""){
    alert('Password cannot be empty!');
    return false;
  }

  //Between 6-15 check
  if (password.length <= 6 || password.length > 15) {
  alert("Password lenght must be between 6 and 15");
    return false;
  }


  //Checks desired rules
  var regForPassword = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

  if (!regForPassword.test(password)) {
    alert("Password should contains at least one uppercase letter, one numeric digit, and one special character.");
    return false;
  }

//---------------------------------------------------------------------------------------------------------------
//Date of Birth Validation
  if(dateOfBirth== ""){
    alert('Date of Birth cannot be empty!');
    return false;

  }

    if (!dateValidation(dateOfBirth)) { 
        alert('Invalid date format!'); 
        return false;
    } 
};


// Validates date formatted "DD/MM/YYYY" with desired rules
function dateValidation(date){

    //Pattern Check
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date))
        return false;

    //Date parts to integers
    var parts = date.split("/");
    var days = parseInt(parts[0], 10);
    var months = parseInt(parts[1], 10);
    var years = parseInt(parts[2], 10);

    //Ranges of year
    if(years < 1800 || years > 2200 )
        return false;

    //Ranges of year
    if(months == 0 || months > 12)
        return false;

    //Defining month lengths
    var monthLengths = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(years % 400 == 0 || (years % 100 != 0 && years % 4 == 0))
        monthLengths[1] = 29;

    //Range of the days
    return days > 0 && days <= monthLengths[months - 1];
};
  

//-----------------------------------------------------------------------------------------------------------------

//Calculator Functions
function clearEverything() {
  document.getElementById("result").value = "";
};


function showResult(value) {
  document.getElementById("result").value += value;
};
