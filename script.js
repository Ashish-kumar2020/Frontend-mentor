console.log('Intro Component');

let allInputs = document.getElementsByTagName("input");
let submitButton = document.getElementById("submitBtn");


function validateForm(e) {
    e.preventDefault();
    let x = document.forms["myForm"]["FirstName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

