/*
* FILE : animal.js
* PROJECT : PROG2001 - Assignment #3
* PROGRAMMER : Janeth Santos and Hongsik Eom
* FIRST VERSION : Oct 23, 2020
* DESCRIPTION :
* JavaScript file contains all the functions used in the cgi-zoo.html
* and php-zoo.html, validation is implemented before submitting the form
* to the webserver.
*/


//global variables
var validName = false;      // indicates if Name input is valid
var validAnimal = false;
var userName = "";


// -----------------------------------------------------------------------------
// FUNCTION : ValidateFullName()
// DESCRIPTION :
// This function validates the Full Name input, to be considered valid
// the input must consist of Alpha characters and one space [e.g John Doe]
// PARAMETERS : none
// RETURNS :bool validName    true if valid, else false
// -----------------------------------------------------------------------------
function ValidateFullName(){
  var inputName = document.getElementById('fullNameBox').value;
  var validName = false;

  // check that the person's name is not blank (input-level validation) and is comprised of
  // alphabetic characters only (and spaces)
  if ((inputName.trim()).length == 0) {
    document.getElementById("fullNameError").innerHTML = "Name can <b>NOT</b> be blank";
  } else {
    var alphaRegex = /^[A-Za-z\s]+$/;
    if (inputName.match(alphaRegex)) {
      userName = inputName; //save valid name of user
      document.getElementById('nameSection').style.display = "none";
      document.getElementById('animalSection').style.display = "inline-block";
      document.getElementById("animalError").innerHTML = "";
      document.getElementById('fullNameError').innerHTML = "";
      document.getElementsByClassName('userName')[0].innerHTML = "Hey, <span style='color: orange;'>" + userName + "</span>, let's learn more about animals! <br>";
    } else {
      document.getElementById('fullNameError').innerHTML = "Sorry! Only Alphabetic Characters allowed.";
    }
  }
  return validName;
}


// -----------------------------------------------------------------------------
// FUNCTION : ValidateAnimal()
// DESCRIPTION :
// This function validates the animal selection is not blank to be considered VALID
// PARAMETERS : none
// RETURNS :bool valideAnimal    true if valid, else false
// -----------------------------------------------------------------------------
function ValidateAnimal() {
  var inputAnimal = document.getElementById('animalBox').value;

  var valideAnimal = false;


  if (inputAnimal === "Cat")  //Cat
  {
    valideAnimal = true;
  }
  else if (inputAnimal === "Dog")  //Dog
  {
    valideAnimal = true;
  }
  else if(inputAnimal === "Dolphin")  //Dolphin
  {
    valideAnimal = true;
  }
  else if(inputAnimal === "Lion")    //Lion
  {
    valideAnimal = true;
  }
  else if (inputAnimal === "Penguin")  // Penguin
  {
    valideAnimal = true;
  }
  else if(inputAnimal === "Eagle" ) // eagle
  {
    valideAnimal = true;
  }
  else if(inputAnimal === "blank" )
  {
    document.getElementById("animalError").innerHTML = "Selection can <b>NOT</b> be blank";
  }

  return valideAnimal;
}



// -----------------------------------------------------------------------------
// FUNCTION : ValidateForm()
// DESCRIPTION :
// JavaScript code for validation
// This function gets called by the on onSubmit Button
// This function calls all other validate functions to ensure all input is correct
// before submitting the form.
// PARAMETERS : none
// RETURNS : none
// -----------------------------------------------------------------------------
function ValidateForm()
{
  var shouldSubmit = false;
  validName = ValidateFullName();
  validAnimal = ValidateAnimal();

  if (validName)
  {
    document.getElementById('fullNameError').innerHTML = "";
    document.getElementById('fullNameBox').innerHTML="";
  }

  if (validAnimal)
  {
    document.getElementById('animalError').innerHTML = "";
  }

  if(validName== true && validAnimal == true)
  {
    shouldSubmit = true;
  }

  return shouldSubmit;
}


