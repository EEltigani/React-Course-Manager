# UWL-React-Coursework-Course-Management-Web-App-Individual-Project-
# 📘 Course Management Web App – React (Individual Assignment)

This project is a mobile-responsive web application developed using **React.js**, created for the **Mobile Web Application Development (CP50093E)** module at the University of West London.

It demonstrates key skills in component-based architecture, React hooks, props handling, event management, and UI state updates.

---

## 👨‍💻 Author

**Emad Eltigani**  
Student ID: 21405996  
University of West London  
Module Leader: Nasser Matoorian

---

## 🎯 Project Objectives

Build a modular React application for course management, which allows users to:

- View individual student records
- Enter and display course module data
- Alert entered data dynamically
- Use JSON props and `Array.map()` to display module lists

---

## 📦 Features

### ✅ Task 1: Student Info Component
- Created `UniversityCourseStudent.js`
- Passed props (`name`, `studentId`, `courseName`, `courseStartDate`)
- Displayed one student’s course info via `App.js`

### ✅ Task 2: Module Entry UI Panel
- Created `UniversityCourseModulePanel.js`
- Used `React.useState` to manage:
  - `moduleName`, `moduleCode`, `startDate`, `endDate`, `courseName`
- Captured input through text fields and displayed it with `alert()`

### ✅ Task 3: Display Module List with JSON
- Created `Modules.js`
- Passed an array of module data via props
- Rendered module details using `Array.map()`

### ✅ Task 4: Display Entered Modules
- Enhanced button handler in `UniversityCourseModulePanel` to:
  - Collect entered module info
  - Display all previously entered modules in a popup

---

## 🛠 Technologies Used

- React.js (with functional components)
- JavaScript ES6+
- HTML & JSX
- CSS (inline and external)
- JSON data structures

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/uwl-course-management-react.git

2. Navigate to the project directory and install dependencies:

npm install

3. Run the app:

npm start

4. Open http://localhost:3000 in your browser.

## 📄 License

This project was developed as part of individual coursework and is intended for academic demonstration purposes only.
