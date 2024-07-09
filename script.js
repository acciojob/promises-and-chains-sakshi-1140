//your JS code here. If required.
const button = document.getElementById("btn");
button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");

  // Get form inputs
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  // Get values from inputs
  const age = parseInt(ageInput.value);
  const name = nameInput.value;

  // Validate inputs
  if (!age || !name) {
    alert("inputs cannot be empty");
    return;
  }
  // Create a promise for form submission handling
  const submissionPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  submissionPromise
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});
