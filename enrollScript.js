const firstName = document.querySelector("#firstName");
const surname = document.querySelector("#surname");
const gender = document.querySelector("#gender");
const birthDate = document.querySelector("#birthDate");
const contact = document.querySelector("#contact");
const classes = document.querySelector("#classes");
const ResAddress = document.querySelector("#ResAddress");

function submitBtn() {
  if (
    !(
      firstName.value === "" ||
      surname.value === "" ||
      gender.value === "" ||
      birthDate.value === "" ||
      contact.value === "" ||
      classes.value === "" ||
      ResAddress.value === ""
    )
  ) {
    alert(
      "Dear " +
        firstName.value +
        " " +
        surname.value +
        ", " +
        "you have successfully enrolled"
    );
  } else {
    alert("Your enrollment was not successful. Please try again later.");
  }
}

// if (number.value == "") {
//     text.textContent = "Input field cannot be empty";
//     text.style.color = "#fff";
//     text.style.display = "block";
//   } else if (number.value.match(regex)) {
//     text.textContent = "Congrats! You Entered A Valid Phone Number";
//     text.style.display = "block";
//     text.style.color = "white";
//     location.href = "https://google.com";
//   } else {
//     text.textContent = "Ooops! Your Phone Number is Invalid";
//     text.style.display = "block";
//   }
// });
