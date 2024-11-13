### **Personal Finance Splitter (Bill Splitter)**

This **Personal Finance Splitter** app is a great project to develop because it solves a very common problem and can be tailored to showcase your skills as a frontend developer. Below, I’ll go into more detail about how to structure the project, including key technical points, the steps to build the app, and the impact this will have on your portfolio.

---

### **Project Breakdown**

#### **HTML & CSS**
Start by building the structure (HTML) and styling (CSS) the user interface.

##### **HTML**
1. **Bill Input Section**:
   - Total Bill: `input[type="number"]`
   - Number of People: `input[type="number"]`
   - Tip Percentage: `input[type="number"]`
   - Custom Inputs: Dynamic fields to track individual contributions (could be added dynamically).

2. **Results Section**:
   - Displays how much each person owes or is owed.
   - If splitting is unequal, each person’s name and their respective amounts should be displayed.

3. **History Section**:
   - View a list of past splits.
   - Include options for editing or deleting past entries.

4. **Action Buttons**:
   - Add/Edit Split: A button for submitting calculations or saving new splits.
   - Clear: A button to reset input fields.

5. **Optional Export**:
   - PDF Export: A button to download the current split calculation as a PDF.
   - Shareable Link: A button to generate a shareable link or clipboard copy of the results.

##### **CSS**
1. **Layout Design**:
   - Use **Flexbox** or **CSS Grid** for a responsive layout.
   - Ensure clear, visually appealing input fields, buttons, and results.
   - Highlight important results using color-coding (green for balanced, red for outstanding balances, etc.).
   - Make sure the app is mobile-first (working well on smaller screens).

2. **Responsive Design**:
   - Style the app to fit both large desktop screens and smaller mobile screens.
   - Use **media queries** to adjust layout for different screen sizes.

---

#### **JavaScript Logic**

##### **Basic Bill Split**
1. **Inputs**:
   - Collect the total bill amount, number of people, and the tip percentage.
   - Create functions to calculate the amount each person owes, both with and without tip.

2. **Equally Split**:
   - For equal splits:  
     `Amount per person = (total bill + tip) / number of people`

3. **Custom Split**:
   - Allow users to specify who paid for what (e.g., Person A pays for drinks, Person B for food, Person C for tip).
   - Calculate who owes whom based on the inputs.

##### **Real-Time Calculation**
- Use JavaScript’s event listeners to trigger recalculations whenever any input changes (e.g., adding/removing people, adjusting bill amounts).
- This requires dynamically updating the results section after each change.

##### **LocalStorage Integration**
1. **Save Data**:
   - Save the results to **LocalStorage** so that users can come back to their previous splits later.
   - Structure the data as an array of objects where each object holds the split details.
   
2. **Load Data**:
   - When the app reloads, check LocalStorage for saved splits and display them for the user.
   - Allow users to delete or modify previous splits.

##### **Error Handling**
- Display messages when:
  - Total bill is zero.
  - Invalid number of people.
  - Missing inputs (e.g., negative values, empty fields).

---

### **Optional Advanced Features**

#### **Multiple Bill Splits**
- Users can handle multiple bills for different events, allowing them to track who owes what across multiple group activities (e.g., lunch one day, dinner another).
- Use tabs or a dropdown to switch between different bills.

#### **Currency Conversion**
- Integrate an API such as [CurrencyLayer](https://currencylayer.com/) to convert bill amounts when users are in different currencies.
- Option to choose a preferred currency for display purposes.

#### **User Profiles**
- Allow users to sign in and create profiles to save multiple groups and their individual expense histories.
- Users could track their total spending across different groups or households.

#### **OCR for Receipt Upload**
- Enable users to upload receipts and use Optical Character Recognition (OCR) to extract the total bill and its categories.
- You could use a JavaScript library like [Tesseract.js](https://tesseract.projectnaptha.com/) to achieve this.

---

### **Project Steps:**

1. **Start Simple**:
   - Build the basic functionality first: bill input, number of people, tip, and equal splits.
   
2. **Custom Payment Shares**:
   - Add the option for users to specify how much each person paid for different categories (e.g., drinks, food).
   
3. **Add LocalStorage**:
   - Implement saving and loading past splits from LocalStorage.

4. **Refine UI/UX**:
   - Focus on a user-friendly design with clear error handling and feedback.
   - Ensure the app is fully responsive and looks good on mobile and desktop.

5. **Optional Features**:
   - After the core functionality is complete, add advanced features like multiple bill splits, currency support, and user profiles.

6. **Deploy**:
   - Once everything is working as expected, deploy your app using platforms like **Netlify**, **Vercel**, or **GitHub Pages**.
   - Share the live version and add it to your portfolio.

---

### **Why This Project Will Stand Out**

1. **Real-World Utility**:
   - Many people encounter the issue of splitting bills regularly. By offering a clear, easy solution, your app solves a problem that many can relate to.
   
2. **Interactive UI**:
   - A dynamic, responsive UI that recalculates totals and adjusts in real time shows off your ability to handle user interactions effectively.

3. **Data Persistence**:
   - Using **LocalStorage** to save past splits demonstrates your ability to manage and persist data on the client side, which is a valuable skill for any frontend developer.

4. **Problem-Solving**:
   - The ability to handle both equal and custom bill splits highlights your problem-solving skills. Employers look for developers who can build tools to solve everyday problems.

5. **Advanced Features**:
   - If you choose to add features like **currency conversion** or **OCR**, you’ll show off more advanced technical skills, making your project even more impressive.

---

### **Final Thoughts**

This project strikes the perfect balance between technical skills, real-world applicability, and user experience design. By developing a **Personal Finance Splitter**, you’ll not only create an app that helps people but also showcase a wide range of skills that can impress potential employers or clients.

It’s a project that is straightforward to start with but has a lot of potential for enhancement and scaling. The combination of interactive features, real-time updates, and data management makes it an excellent addition to your portfolio!