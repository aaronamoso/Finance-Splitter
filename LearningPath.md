Hello! This is where I will document my progress for this project:

Languages: HTML/CSS, JS
Tools: Node.js, Express.js, MongoDB, Git, Miro

I initially finished the frontend with user input validation but wanted to do more since I wanted to be able to use this app personally. A little background
of how and why I am doing this project is because my friends and I have a hard time splitting expenses when we go on trips together. For instance, one pays for the 
AirBnb, the other for food, and some for activities and many other things. I want to solve this problem of confusion and frustration and also I really think this project is scalable and can be used by many other people. There is so much features I wanted to create but for now, let's keep that as a secret! One step at a time.

Progress:
1. Finished the key component of the app with utilizing only JS, HTML, and CSS.
2. Connecting the backend
3. Connecting MongoDB to store accounts, logs, activities
    Things I have learned: Two different things for security in terms of user input valudation in FE and BE...
        BE: Focuses on Security and Data Integrity.
            - Tokens, Authentication, Encryption - essential for protecting sensitive data and ensuring that only authorized users access certain parts of the app
            - Complex Business Logic - Verifying things like usernames, password strength (using hashing), and secure transactions.
            - DB-level Validation - checking if a record already exists, ensuring data consistency, and sanitizing inputs to prevent SQL injection or XSS attacks

        FE: Focuses on UX and BASIC validation
            - Immediate Feedback - Required fields, correct email formats, password complexity indicators
            - Form Validation - Ensuring users enter the right type of data (numbers, emails, specific character limits)
            - Input Restrictions - Preventing invalid characters or out of range numbers directly in the input fields
4. folder structure: Frontend > pages (html/css/js), 

BackEnd/ > 
    /models > Registration.js (schema json)
    server.js