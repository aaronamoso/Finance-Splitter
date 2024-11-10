### **Personal Finance Splitter (Bill Splitter)**

#### **Problem It Solves**
Splitting bills and expenses among friends, roommates, or colleagues is a common task, but often leads to confusion or arguments about how much each person owes, especially when one person paid for more than others (e.g., drinks vs. food at a restaurant). A **Personal Finance Splitter** app helps users easily calculate and track how much each person owes in different scenarios, whether the bill is split equally or unequally (e.g., different payment shares, adding or subtracting for specific items). 

It provides a simple solution for collaborative budgeting in everyday life, helping users avoid financial misunderstandings.

#### **Technologies**
- **HTML**: Structure of the app.
- **CSS**: Styling the UI to make it visually appealing and user-friendly.
- **JavaScript**: Logic for handling the bill splitting calculations, dynamic updates, and user input.
- **LocalStorage**: For saving past splits (so users can view historical data without needing to re-enter the information).
- **Optional Framework**: React (or another framework like Vue) can be used for more advanced state management and creating a more scalable, maintainable app, especially if you plan on adding more features in the future.

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

3. **Handling Recurring Expenses (e.g., Rent, Utilities)**
   - **Recurring Expenses**: Users can input fixed, recurring expenses like rent, utilities, or subscriptions (e.g., Netflix) and assign them to each person in the household or group.
   - **Options**:
     - Split the expense equally or allow for custom splitting based on agreed-upon shares (e.g., if one person uses more water or electricity, they pay more).
   - **Real-Time Updates**: As users update the number of people or payment shares, the app should immediately adjust the calculations.

4. **Expense History and LocalStorage**
   - Allow users to save previous bill splits and view a history of past transactions.
   - Use **LocalStorage** to persist data between app sessions, so users don’t lose their history when they close the app.
   - Option to delete past splits or edit them if something was incorrect.

5. **Clear UI/UX with Real-Time Updates**
   - **Responsive Design**: Ensure the app works on both desktop and mobile, adapting to different screen sizes.
   - **Instant Feedback**: When users input data (e.g., adding a new person or adjusting the amount someone paid), the app should instantly recalculate and display the new amounts in a clean, easy-to-read format.
   - **Error Handling**: Display clear messages if there’s an error (e.g., "Total bill cannot be 0", "Invalid number of people", etc.).

6. **Export/Share Bill**
   - Users should have the option to **export** the calculated split to a downloadable PDF or **share it** with others via email or social media. This could be useful if people want to keep a record of their shared expenses.
   - Option to **copy the calculation** to the clipboard for easy sharing.

---

### **Optional Advanced Features**

1. **Multiple Bill Splits at Once**
   - Allow users to input multiple bills at once (e.g., for multiple events, days, or recurring monthly splits) and track who owes what across different bills.
   - **UI**: A simple tabbed view or dropdown to switch between different bill splits.

2. **Advanced Currency Support**
   - Allow users to input and view amounts in different currencies. For example, if some people paid in USD and others in EUR, the app can convert the amounts and show the equivalent in a single currency (using a currency API).
   
3. **User Profiles**
   - Optionally allow users to create accounts or profiles where they can save multiple groups or expenses, and track their total spending across different groups or households.
   
4. **Receipt Upload (for Group Expenses)**
   - Users can upload a photo of the bill or receipt, and the app could auto-extract the total amount using **OCR (Optical Character Recognition)** libraries or allow users to manually input the total and categories.
   
---

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
  
- **LocalStorage Integration**:
  - Use **LocalStorage** to store the bill and split data so users can come back to view or edit previous calculations. Save data in a structured format (e.g., an array of objects, where each object represents a past split).
  - Ensure the app loads previous data from LocalStorage when the page is reopened.

- **Real-Time Updates**:
  - Use JavaScript to update the UI immediately after users enter their data (e.g., recalculating the amount each person owes as soon as a user changes any input field).

- **Responsive Design**:
  - Use **CSS Grid** or **Flexbox** to ensure the app is responsive. It should look and function well on both large desktop screens and mobile devices.

#### **Optional Advanced Features**
- If using **React**, you can use **state management** for better handling of the dynamic data (e.g., the users, amounts, history). React will allow you to easily track changes in the app’s state and ensure the UI updates accordingly.
- If you want to add a **currency conversion** feature, you could integrate an API like [CurrencyLayer](https://currencylayer.com/) to get real-time exchange rates.

---

### **Why This Project Helps**

1. **Practical and Useful**: This tool solves a real-world problem that many people face on a regular basis. Its usefulness makes it stand out as a portfolio project.
2. **Interactive UI**: It shows that you can build user-friendly, interactive applications with dynamic content, which is an important skill for frontend developers.
3. **Data Persistence**: Using **LocalStorage** for data persistence is an important skill that showcases your ability to manage data client-side.
4. **Problem-Solving**: You’re not just building a static page; you’re creating a dynamic tool that helps users solve a problem. Employers value problem-solving skills, and this project highlights that.
5. **Real-Time Calculation**: The ability to update the UI dynamically as users change input values shows your skill in handling user interaction and creating smooth experiences.

### **Next Steps**

1. **Build the Basic Bill Split**: Focus first on getting the basic split calculations working, both for equal and custom shares.
2. **Add Recurring Expenses**: Once the basic functionality is in place, add support for recurring expenses (e.g., rent, utilities).
3. **Implement LocalStorage**: Ensure users can save and revisit past splits, storing their data in **LocalStorage**.
4. **Polish the UI**: Make sure your app has a clean, user-friendly interface that works across devices.
5. **Deploy and Share**: Deploy your project using **Netlify**, **GitHub Pages**, or **Vercel**. Add it to your portfolio and share the live version.

This **Personal Finance Splitter** app will not only solve a problem that many people face daily but also demonstrate your ability to work with interactive features, state management, and dynamic data in a frontend project. It’s an excellent addition to your portfolio!