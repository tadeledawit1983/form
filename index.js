const fullname = document.getElementById("fullname");
const password = document.getElementById("password");
const email = document.getElementById("email");
const pass2 = document.getElementById("pass2");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (fullname.value == "") {
    error(fullname, "please enter your name");
  } else {
    success(fullname);
  }
  if (password.value == "") {
    error(password, "password can not be empty");
  } else if (password.value.length < 6) {
    error(password, "password must be at least 6 characters");
  } else {
    success(password);
  }
  if (pass2.value == "") {
    error(pass2, "password can not be empty");
  } else if (pass2.value.length < 6) {
    error(pass2, "password must be at least 6 characters");
  } else if (password.value !== pass2.value) {
    error(pass2, "password does not match");
  } else {
    success(pass2);
  }
  if (email.value == "") {
    error(email, "email can not be empty");
  } else {
    if (!validateEmail(email.value)) {
      error(email, "invalid Email please include @, . com");
    } else {
      success(email);
    }
  }
});

function error(input, message) {
  var myform = input.parentElement;
  let errorElement = myform.querySelector("span");
  errorElement.textContent = message;
  errorElement.style.visibility = "visible";
  myform.classList.add("error");
}
function success(input) {
  var myform = input.parentElement;
  let errorElement = myform.querySelector("span");
  errorElement.style.visibility = "hidden";
  errorElement.textContent = "";
  myform.classList.remove("error");
  myform.classList.add("success");
}

function validateEmail(email) {
  let regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
