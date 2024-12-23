let numbersOnly = /^\d*\.?\d+$/; // Ensures to only accept numbers and a dot
let lettersOnlyWithSpaces = /^[A-Za-z\s]+$/; // Ensures to only accept string

// Handle submit validation
document.getElementById("register").addEventListener("submit", async function (event) {

    event.preventDefault(); // Prevent

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // sending POST req to the BE to register the user
    try {
        await fetch('http://localhost:3000/register', {
            method: 'POST', // in CRUD this means create and tells the server to add data
            header: {
                'Content-Type': 'application/json', // send data as JSON
            },
            body: JSON.stringify({ name, email, password }), // Conver form data to JSON
        })
        const result = await response.json();
        alert(result.message);  // Show success or error message
    } catch (error) {
        alert('Registration failed!');
        console.error('Error:', error);
    }
});