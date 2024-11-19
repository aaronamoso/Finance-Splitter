### **Personal Finance Splitter (Bill Splitter)**

#### **Problem It Solves**
Splitting bills and expenses among friends, roommates, or colleagues is a common task, but often leads to confusion or arguments about how much each person owes, especially when one person paid for more than others (e.g., drinks vs. food at a restaurant). A **Personal Finance Splitter** app helps users easily calculate and track how much each person owes in different scenarios, whether the bill is split equally or unequally (e.g., different payment shares, adding or subtracting for specific items). 

It provides a simple solution for collaborative budgeting in everyday life, helping users avoid financial misunderstandings.

#### **Technologies**
- **HTML**: Structure of the app.
- **CSS**: Styling the UI to make it visually appealing and user-friendly.
- **JavaScript**: Logic for handling the bill splitting calculations, dynamic updates, and user input.

---

### **Core Features**

1. **Basic Bill Split**
   - **User Input**: 
     - Allow users to input the total amount of the bill.
     - Specify the number of people the bill will be split between.
     - Option to include a tip percentage that is split among all users.
   - **Output**:
     - Automatically calculate how much each person owes (with or without tip) and display it in a clean format.
     - If the bill is split equally, each user should see the amount they owe.
   
2. **Custom Payment Shares**
   - Allow users to input the amounts that individuals paid for specific categories of the bill (e.g., drinks, food, tax, tip).
   - **Example**:
     - Person A pays for drinks, Person B pays for food, Person C pays for tip. The app should dynamically adjust how much each person owes or is owed based on the different amounts paid.
   - **Calculation**: The app will recalculate the split based on the amounts entered and adjust the final totals.
3. **Clear UI/UX with Real-Time Updates**
   - **Responsive Design**: Ensure the app works on both desktop and mobile, adapting to different screen sizes.
   - **Instant Feedback**: When users input data (e.g., adding a new person or adjusting the amount someone paid), the app should instantly recalculate and display the new amounts in a clean, easy-to-read format.
   - **Error Handling**: Display clear messages if there’s an error (e.g., "Total bill cannot be 0", "Invalid number of people", etc.).


### **Project Breakdown**

#### **HTML & CSS**
- **HTML**: Create the structure for each part of the app:
  - Input fields for total amount, number of people, tip percentage, and individual contributions.
  - A results section where the split amounts are displayed.
  - Optionally, a history section to view previous splits.
  
- **CSS**: Style the interface to make it visually clear and user-friendly.
  - Use clear buttons for submitting data, editing, or deleting a split.
  - Use colors to indicate status (e.g., green for a fair split, red for errors or unresolved issues).
  - Implement a clean, mobile-first layout to accommodate different devices.

#### **JavaScript Logic**
- **Handling Inputs**:
  - Write functions that calculate the split based on user input. Use basic math to divide the total bill by the number of people, or adjust it according to user-provided custom shares (e.g., individual contributions).

- **Real-Time Updates**:
  - Use JavaScript to update the UI immediately after users enter their data (e.g., recalculating the amount each person owes as soon as a user changes any input field).

- **Responsive Design**:
  - Use **CSS Grid** or **Flexbox** to ensure the app is responsive. It should look and function well on both large desktop screens and mobile devices.


### **Why This Project Helps**

1. **Practical and Useful**: This tool solves a real-world problem that many people face on a regular basis. Its usefulness makes it stand out as a portfolio project.
2. **Interactive UI**: It shows that you can build user-friendly, interactive applications with dynamic content, which is an important skill for frontend developers.

3. **Problem-Solving**: You’re not just building a static page; you’re creating a dynamic tool that helps users solve a problem. Employers value problem-solving skills, and this project highlights that.
4. **Real-Time Calculation**: The ability to update the UI dynamically as users change input values shows your skill in handling user interaction and creating smooth experiences.


This **Personal Finance Splitter** app will not only solve a problem that many people face daily but also demonstrate your ability to work with interactive features, state management, and dynamic data in a frontend project. It’s an excellent addition to your portfolio!