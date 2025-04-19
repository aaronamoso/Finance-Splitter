CODING LOGS

Hello! This is where I will document my progress for this project:

Languages: HTML/CSS, JS
Tools: Node.js, Express.js, MongoDB, Git, Miro

Folder strucure: backend, frontend, . gitignore and a few notes

How I am tackling this project?
    1. Plan the design
    2. Database - figure connecting: done!
    3. Backend - mainly for js security, api
    4. Frontend
    5. Add features one by one - doing front and back simultaneously

I initially finished the frontend with user input validation but wanted to do more since I wanted to be able to use this app personally. A little background
of how and why I am doing this project is because my friends and I have a hard time splitting expenses when we go on trips together. For instance, one pays for the 
Airbnb, the other for food, and some for activities. I want to solve this problem of confusion and frustration and also I really think this project is scalable and can be used by many other people. There is so much features I wanted to create but for now, let's keep that as a secret! One step at a time.

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
4. Dec. 22, I was able to connect the database. I can see form submissions on my mongoDB account which was fantastic! Since both folders are separated, backend and frontend, backend has the server, API, DB, Scheme.
    What I learned: The form 'action' attribute is where data is being sent (where the server is expecting it). At locaholhost:3000/register, I am getting a json file; message: Registration successful. I still need to figure out how to just alert, refresh, and not show this JSON format--instead, direct user to their account...

5. I started looking into routing correctly and ensuring all the files are in the right folder. I did my research for the MVC pattern and it seems more organized than having a plain BE and FE folder. 
    finance-splitter/
│
├── backend/
│   ├── models/
│   │   └── Registration.js
│   │
│   ├── routes/
│   │   └── regAndLog.js   // New file for handling registration/login routes
│   │
│   ├── server.js    // Main entry point (minimal logic)
│   └── .env         // MongoDB URI
│
└── frontend/        // Frontend (HTML, CSS, JS)
    ├── views/
    ├── controllers/
    └── styles/

6. Installing bcrypt to hash and store passwords. Dec. 23. This is important because it takes time to create password hashes therefore requires time to decrypt them, significantly slowing hackers to attempt the bcrypt hash

7. I am having trouble with the form submission. Once user is registered, my page just goes black. 

8. December 29, started doing the CSS for login and registration form... I noticed that when using the media query you would only need to change the padding, margin, and font-size.

9. I finally got the registration and login to work. It is now showing data on MongoDB. Exciting stuff. Things I learned.
    - ensure that the name attribute on html is present... in other words, the backend looks for these attributes. More like a bridge for the FE to BE.

10. January 4, currently doing wireframe for how API is being handled for private vs public or with or without an account. I learned that I can bridge using the public API to send over to my private. Think of it as adding items to cart. Using public API
    for "products", (which this can be accessed without an account).

11. I think I will be focusing more on one feature is to split the bill and being able to save that to the database
MODEL SCHEMA:
Bill Name:
Total Bill:
Number of People: 
Description:
 
12. I am not encountering errors for routing since adding the Vercel json. I have noticed that the page itself was not workinng and have compromised the whole thing. Will look into it.
 
13. Will hide the buttons and create a new branch just in case.

14. January 9, I had to comment out the button section on the index.html because this is a new feature -- will then create a branch.

15. The href on the index.html was incorrect therefore everytime the buttons were clicked, it directed users to the raw and not styled index css/homepage.

16. Will continue on creating the wireframe since registration is done. Will clean up the overall UX for the mobile version.

17. New plan: I will change the whole layout to be more readable and eye catching. For portofolio sake and since I applied to many jobs.

18. January 12. Currently figuring out the custom logic for the backend. 

19. Registration complete, api to dashboard now

20. Creating User Dashboard where it shows Welcome message, recent bills, and outstanding balance, CTA buttons on the bottom

<<<<<<< HEAD
21. FE and BE Logic: 
💡 Quick Cheat Sheet:
Task	Frontend or Backend?
Showing a list of bills	- Frontend
Calculating how to split a bill - Backend (main logic)
Toggling dark mode	- Frontend
Logging in a user	- Backend
Storing user info	- Backend (DB)
Showing error messages	- Frontend
Verifying if user is logged in	- Backend
Sending bill data to API	- Frontend
Returning bill summary data	- Backend
=======
21. Decided to use React for the frontend instead that way pages are dynamic and easier to create and reuse.

22. Feb 12. Logic for custom split I think would be much more ideal to usr either a checkbox or adding name for each person instead of people adding friends

23. Feb 13. Continuing with the project feature itself.

24. Feb 18. Finished the backend logic, moving onto the frontend using REACT. Things to create respectively:
    1. Introduction (This is where user has no account)
    2. Registration / Login page
    3. User Dashboard page

25. Homepage -> Registration/Login -> 
    UserDashboard -> 
+------------------------------------+
| Welcome back, [Username]!          |
|                                    |
| Recent Bills:                      |
| - Dinner at Joe's  $120  Pending   |
| - Weekend Trip     $300  Settled   |
| - Movie Night      $60   Pending   |
|                                    |
| Outstanding Balances:              |
| - You owe Bob: $15                 |
| - Alice owes you: $20              |
|                                    |
| [Create New Bill] [View All Bills] |
+------------------------------------+

Pending, Settled can be a dropdown option for now

April 1: Decided to delete the react frontend app. will focus more on the backend model

>>>>>>> main
