document.getElementById('loginForm').onsubmit = async function(e) {
    e.preventDefault();

    // Gets the form data/value
    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
 
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            window.location.href = '/';  // Redirect to homepage
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed.');
    }
}; 