let numbersOnly = /^\d*\.?\d+$/; // ensures it only accepts number and a dot
let totalPerPerson = document.getElementById("totalPerPeson");
totalPerPerson.append(result);


document.getElementById("mySubmit").onclick = function () {
  // this is the form or how to access
  // billName LOGIC
  // BILL NAME LOGIC
  let isStringOnly = /^[A-Za-z']+$/;
  if (isStringOnly.test(billName)) {
  } else {
    console.log("Enter a valid name!");
  }

  let billName = document.getElementById("billName").value; // this gets the value of the input for billName
  console.log(billName); // for testing

  // Uses .test(string) method bc it finds a match in a string, if it does,
  // it returns true, otherwise it returns false

  // totalBill LOGIC
  let totalBill = document.getElementById("totalBill").value;
  if (numbersOnly.test(totalBill)) {
  } else {
    console.log("Enter a valid number");
  }

  // TIP PERCENTAGE  (OPTIONAL)
//   let tipPercentage = document.getElementById("tipPercentage").value;
//   if (numbersOnly.test(tipPercentage)) {
//   } else {
//     console.log("Enter a valid number");
//   }

  // NUMBER OF PEOPLE LOGIC
  let numOfPeople = document.getElementById("numOfPeople").value;
  if (numbersOnly.test(numOfPeople)) {
  } else {
    console.log("Enter a valid number");
  }

  // LOGIC FOR THE CALCULATIONS
  let result = (totalBill / numOfPeople / 100).toFixed(2);
  console.log(result);


};
