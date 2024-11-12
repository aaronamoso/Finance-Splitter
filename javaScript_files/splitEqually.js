let numbersOnly = /^\d*\.?\d+$/;
let tipPercentage;
let numOfPeople;



document.getElementById("mySubmit").onclick = function () { // this is the form or how to access
    // billName LOGIC
    // let billName = document.getElementById("billName").value; // this gets the value of the input for billName
    // console.log(billName); // for testing

    // // Uses .test(string) method bc it finds a match in a string, if it does, it returns true, otherwise it returns false
    // // regEx
    // let isStringOnly = /^[A-Za-z']+$/;

    // if (isStringOnly.test(billName)) {
    //     console.log("success")
    // } else {
    //     console.log("Enter a valid name!")
    // } 

    // totalBill LOGIC
    let totalBill = document.getElementById("totalBill").value;
    if (numbersOnly.test(totalBill)) {
        console.log("success")
    } else {
        console.log("enter a num") 
        // continue with the logic for only allow two decimals
    }

}
