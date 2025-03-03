# Javascript
This shows how to do multiple things in javascript


JavaScript on the Browser
To kick off the Front-End Bootcamp, we will start with running JavaScript on the browser.
So for each problem:
1. Create an HTML file named index.html in the same folder as your task-[n].js file
e.g. task-1.js
2. Load the script on the index.html file
3. Open the HTML file in a browser
4. Press F12 to open developer tools and view your console output.
   
Task 1
In JavaScript, there are several primitive and reference data types. For this task, you will 
create validation functions for different JavaScript data types.
Implement the following functions:
1. isString(value) - Checks if input is a string
2. isNumber(value) - Checks if input is a number (but not NaN)
3. isBoolean(value) - Checks if input is a boolean
4. isUndefined(value) - Checks if input is undefined
5. isNull(value) - Checks if input is null
6. isArray(value) - Checks if input is an array
7. isObject(value) - Checks if input is an object (but not an array or null)
8. isFunction(value) - Checks if input is a function
Each function should return true if the input matches the specified type, and false
otherwise.

Task 2
In programming, there are five common cases: camelCase, snakecase, kebab-case, 
PascalCase and UPPER_CASE_SNAKE_CASE. For this task, you are to Write a function that 
takes in a sentence and a desired case as the inputs, and then converts the sentence into 
the desired case.
convert("Hello, World.", "camel")
Output: helloWorld
convert("Hello, World.", "snake")
Output: hello_world
convert("Hello, World.", "kebab")
Output: hello-world
convert("Hello, World.", "pascal")
Output: HelloWorld
convert("Hello, World.", "uppercasesnake")
Output: HELLO_WORLD

Task 3
Create a set of string utility functions to manipulate text in different ways:
// Returns the string with characters in reverse order
reverseString(“Hello”)
Output: olleH
// Returns the number of vowels in a string
countVowels(“Hello”)
Output: 2
// Truncates string to maxLength and adds "..." if truncated
truncate(“Hello”, 3)
Output: Hel…

Task 4
Write a JavaScript function called getInitials() that takes a person's name as input and 
returns their initials as output. The function should extract the first letter of each word in 
the name and return them capitalized without any separators.
getInitials(“John Doe”)
Output: JD
getInitials (“Martin Luther King”)
Output: MK
getInitials(“Harry”)
Output: H
getInitials(“Hermione Granger”)
Output: HG

Task 5
Create a JavaScript function called checkPasswordStrength() that analyzes a password 
and returns a rating of its security level.
Evaluate against the below security criteria:
1. Min Length of 8 characters
2. At least 1 uppercase letter
3. At least 1 lowercase letter
4. At least 1 number
5. At least 1 special characters
Returns weak, medium, or strong based on how many criteria are met

Task 6
In banking applications, processing arrays of financial data is a common task. This exercise 
challenges you to implement array manipulation functions without using JavaScript's builtin array methods.
Create four utility functions that handle common operations on arrays. 
Implement these functions using only loops and basic operations:
1. findMin(arr) - Find the smallest number in an array of account balances
2. findMax(arr) - Find the largest number in an array of account balances
3. arraySum(arr) - Calculate the total of a series of transactions
4. removeDuplicates(arr) - Eliminate duplicate transaction IDs
// Finding minimum value
findMin([1000, 2500, 750, 5000, 3200]);
// Output: 750
// Finding maximum value
findMax([1000, 2500, 750, 5000, 3200]);
// Output: 5000
// Calculating total balance
arraySum([150, 24.99, 50, 74.50]);
// Output: 299.49
// Removing duplicate transaction IDs
removeDuplicates(["TX123", "TX456", "TX123", "TX789", "TX456"]);
// Output: ["TX123", "TX456", "TX789"]
