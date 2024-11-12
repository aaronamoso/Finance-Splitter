let billName;
let totalBill;
let tipPercentage;
let numOfPeople;



document.getElementById("mySubmit").onclick = function () { // this is the form or how to access
    // billName LOGIC
    billName = document.getElementById("billName").value; // this gets the value of the input for billName
    console.log(billName); // for testing

    // Uses .test(string) method bc it finds a match in a string, if it does, it returns true, otherwise it returns false
    // regEx
    let isStringOnly = /^[A-Za-z']+$/;

    if (isStringOnly.test(billName)) {
        console.log("success")
    } else {
        console.log("Enter a valid name!")
    } 

    // totalBill LOGIC
    totalBill = document.getElementById("totalBill").value;
    console.log(totalBill);
}
