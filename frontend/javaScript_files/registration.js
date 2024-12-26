let numbersOnly = /^\d*\.?\d+$/; // Ensures to only accept numbers and a dot
let lettersOnlyWithSpaces = /^[A-Za-z\s]+$/; // Ensures to only accept string

// Handle submit validation
document.getElementById("register").addEventListener("submit", async function (event) {

    event.preventDefault(); // Prevent the form from submission

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }

  
    // sending POST req to the BE to register the user
    try {
        await fetch('http://localhost:3000/register', {
            method: 'POST', // in CRUD this means create and tells the server to add data
            header: {
                'Content-Type': 'application/json', // send data as JSON
            },
            body: JSON.stringify({ formData}), // Conver form data to JSON
        })

        const data = await response.json();
                if (response.ok) {
                    alert(data.message);
                    window.location.href = '/login';  // Redirect to login page
                } else {
                    alert(data.message);
                }
    } catch (error) {
        alert('Registration failed!');
        console.error('Error:', error);
    }
});