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
    alert(
      "Your enrollment was not successful. Please fill in all input fields."
    );
  }
}
