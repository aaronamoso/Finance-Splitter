let numbersOnly = /^\d*\.?\d+$/; // Ensures to only accept numbers and a dot
let lettersOnlyWithSpaces = /^[A-Za-z\s]+$/; // Ensures to only accept string

document.getElementById("register").addEventListener("submit", function(event){
    
    event.preventDefault(); // Prevent
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Finish up the logic later
});