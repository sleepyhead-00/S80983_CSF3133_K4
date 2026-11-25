
/*
ERROR LIST:

Error 1 (grade.html, Line 9):
Missing return before checkMark(), so form validation
does not properly prevent submission.

Error 2 (grade.html, Line 17):
Function name showtable() does not match showTable().

Error 3 (grade.html, Line 19):
Incorrect JavaScript filename grades.js.
Correct filename is grade.js.

Error 4 (grade.js, Line 5):
Used assignment operator (=) instead of comparison (===).

Error 5 (grade.js, Line 9):
isNan() is incorrect. Correct function is isNaN().

Error 6 (grade.js, Line 14):
Used && instead of || for checking mark limits.

Error 7 (grade.js, Line 28):
getElementByID() is incorrect.
Correct method is getElementById().

Error 8 (grade.js, Line 30):
colour is incorrect. Correct property is color.

Error 9 (grade.js, Line 38):
Loop starts at 1 instead of 0, causing the first row to be missing.

Error 10 (grade.js, Line 42):
innerHtml is incorrect. Correct property is innerHTML.

Error 11 (grade.js, Line 34):
Function naming must match the HTML onclick function.

ERRORS FIXED AND EXTENSIONS ADDED BELOW.
*/


// Function to check the student's mark
function checkMark() {

    // Get student name and mark
    let name = document.forms["gradeForm"]["name"].value.trim();
    let mark = document.forms["gradeForm"]["mark"].value.trim();

    // Check if name is empty
    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Check if mark is empty
    if (mark === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Check whether mark is a valid number
    if (isNaN(mark) || !isFinite(Number(mark))) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    // Convert mark into a number
    mark = Number(mark);

    // Check whether mark is between 0 and 100
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Determine the student's grade
    let grade;

    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 65) {
        grade = "B";
    } else if (mark >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Display student's result
    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    // Change result colour according to grade
    if (grade === "A" || grade === "B") {
        document.getElementById("result").style.color = "green";
    } else if (grade === "C") {
        document.getElementById("result").style.color = "orange";
    } else {
        document.getElementById("result").style.color = "red";
    }

    // Display the date and time when grade was checked
    document.getElementById("dateTime").innerHTML =
        "Checked on: " + new Date();

    // Prevent form from refreshing the page
    return false;
}


// Function to display the grade table
function showTable() {

    // Grade names and their mark ranges
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    // Create HTML table
    let tableHTML = "<table>";

    // Add table heading
    tableHTML += "<tr><th>Grade</th><th>Mark Range</th></tr>";

    // Loop through all four grades
    for (let i = 0; i < grades.length; i++) {

        tableHTML += "<tr><td>" + grades[i] +
                     "</td><td>" + ranges[i] +
                     "</td></tr>";
    }

    // Close table
    tableHTML += "</table>";

    // Display table on webpage
    document.getElementById("tableContainer").innerHTML = tableHTML;
}


// Function to generate a random mark
function randomMark() {

    // Generate a random whole number between 0 and 100
    let randomNumber = Math.floor(Math.random() * 101);

    // Put the random number into the mark input field
    document.getElementById("mark").value = randomNumber;
}
