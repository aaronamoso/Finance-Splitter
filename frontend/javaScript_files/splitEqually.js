let numbersOnly = /^\d*\.?\d+$/; // Ensures to only accept numbers and a dot
let isStringOnly = /^[A-Za-z']+$/; // Ensures to only accept string

document.getElementById("mySubmit").onclick = function () {
  // Finds the DOM elements -- .value accesses current input value
  let billName = document.getElementById("billName").value;
  let totalBill = document.getElementById("totalBill").value;
  let numOfPeople = document.getElementById("numOfPeople").value;
  let totalPerPerson = document.getElementById("totalPerPerson"); // This is the empty div
  let displayElements = document.getElementById("displayElements");

  // Clear previous content to prevent duplicates
  totalPerPerson.innerHTML = "";
  displayElements.innerHTML = "";

  // Validate billName
  if (!isStringOnly.test(billName)) {
    totalPerPerson.append("Enter a bill name");
    return; // Stop execution if invalid
  }

  // Validate totalBill and numOfPeople
  if (!numbersOnly.test(totalBill) || !numbersOnly.test(numOfPeople)) {
    totalPerPerson.append("Enter a valid number");
    return; // Stop execution if invalid
  }
  displayElements.appendChild(document.createElement("br"));

  displayElements.append(`Bill Name: ${billName}`);
  displayElements.appendChild(document.createElement("br"));

  displayElements.append(`Total Bill: ${totalBill}`);
  displayElements.appendChild(document.createElement("br"));

  displayElements.append(`Number of People: ${numOfPeople}`);
  displayElements.appendChild(document.createElement("br"));
  displayElements.appendChild(document.createElement("br"));

  // Calculate and display result
  let result = (totalBill / numOfPeople).toFixed(2); // Allows only two decimals eg. 12.99
  totalPerPerson.append("Total per person: $" + result);

  // Clear the input fields
  document.getElementById("billName").value = "";
  document.getElementById("totalBill").value = "";
  document.getElementById("numOfPeople").value = "";

//   if (!billName && !totalBill && !numOfPeople) {
//     document.getElementById("container").style.visibility = "hidden";
//   }
};
