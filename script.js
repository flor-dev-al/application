function storeValue(event) {
  localStorage.setItem(event.target.id, event.target.value);
}

const firstName = document.getElementById("first_name");
const fullName = document.getElementById("full_name");
const email = document.getElementById("email-id");
const number = document.getElementById("number-id");
const checkboxValue = document.getElementById("checkbox-agree");
const btnSubmit = document.getElementById("form-btn");

btnSubmit.addEventListener("click", function () {
  const firstNameData = firstName.value;
  const fullNameData = fullName.value;
  const emailData = email.value;
  const numberData = number.value;
  const checkboxData = checkboxValue.value;

  console.log(firstNameData);
  console.log(fullNameData);
  console.log(emailData);
  console.log(numberData);
  console.log(checkboxData);

  localStorage.setItem("first-name", firstNameData);
  localStorage.setItem("full-name", fullNameData);
  localStorage.setItem("email-data", emailData);
  localStorage.setItem("number-data", numberData);
  localStorage.setItem("checkbox-value", checkboxData);
});

const finalPopUp = document.querySelector(".filled-pop-up");

btnSubmit.addEventListener("click", function () {
  finalPopUp.classList.add("show-pop-up");
});

const h2 = document.querySelector("h2");
btnSubmit.addEventListener("click", function () {
  h2.innerHTML = localStorage.getItem("time-slot");
});

const h3 = document.querySelector("h3");
btnSubmit.addEventListener("click", function () {
  h3.innerHTML = localStorage.getItem("first-name");
});

const h4 = document.querySelector("h4");
btnSubmit.addEventListener("click", function () {
  h4.innerHTML = localStorage.getItem("full-name");
});

const h5 = document.querySelector("h5");
btnSubmit.addEventListener("click", function () {
  h5.innerHTML = localStorage.getItem("email-data");
});

const h6 = document.querySelector("h6");
btnSubmit.addEventListener("click", function () {
  h6.innerHTML = localStorage.getItem("number-data");
});

/* I have to acknowledge that I found the javascript part a bit hard */

/* After many hours of searching through stackoverflow and mdn I managed to do the task 
thanks to 2 videos I found on YouTube... well at least I didn't use chatGPT ore any other LLM, 
I did the good ol' way */
