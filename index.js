const submitForm = (e) => {
  e.preventDefault();
  const inputs = document.getElementsByTagName("input");
  const errors = document.getElementsByClassName("error-msg");

  Array.from(inputs).forEach((element, index) => {
    if (!element.value) {
      errors.item(index).style.display = "block";
    } else {
      errors.item(index).style.display = "none";
    }
  });
};

function myFunction(e) {
  const form = document.getElementById("form");
  form.addEventListener("submit", submitForm);
}

myFunction();
