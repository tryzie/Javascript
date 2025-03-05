// // List of tasks with their titles and scripts
// const tasks = [
//     { title: "Data Type", script: "DataType.js" },
//     { title: "Type Case", script: ".idea/Task2/TypeCase.html" },
//     { title: "Manipulate Text", script: "TypeCase.js" },
//     { title: "Get initials", script: "TypeCase.js" },
//     { title: "Check Password", script: "TypeCase.js" },
//     { title: "Array Manipulation", script: "TypeCase.js" }
// ];
//
// let currentTaskIndex = -1; // No task selected at start
//
// // Load task based on index
// function loadTask(index) {
//     if (index >= 0 && index < tasks.length) {
//         currentTaskIndex = index;
//         document.getElementById("task-title").innerText = tasks[index].title;
//
//         // Load the task script dynamically
//         let taskContainer = document.getElementById("task-container");
//         taskContainer.innerHTML = `<p>Loading ${tasks[index].title}...</p>`;
//
//         // Remove old script
//         let oldScript = document.getElementById("task-script");
//         if (oldScript) oldScript.remove();
//
//         // Add new script
//         let script = document.createElement("script");
//         script.src = tasks[index].script;
//         script.id = "task-script";
//         document.body.appendChild(script);
//     }
// }
//
// // Navigation Functions
// function firstTask() {
//     loadTask(0);
// }
//
// function prevTask() {
//     if (currentTaskIndex > 0) {
//         loadTask(currentTaskIndex - 1);
//     }
// }
//
// function nextTask() {
//     if (currentTaskIndex < tasks.length - 1) {
//         loadTask(currentTaskIndex + 1);
//     }
// }
//
// function lastTask() {
//     loadTask(tasks.length - 1);
// }
//
// // Handle Dropdown (You can customize based on the task)
// document.getElementById("task-options").addEventListener("change", function () {
//     alert("Selected operation: " + this.value);
// });

function loadTask(taskName) {
    // Change the title
    document.getElementById("task-title").innerText = taskName + " Task";

    // Load the task's HTML
    fetch(`Tasks/${taskName}.html`)
        .then(response => response.text()) // Get the file content
        .then(data => {
            document.getElementById("task-container").innerHTML = data; // Insert into page
            removeOldScript(); // Remove old script
            loadTaskScript(taskName); // Load the JavaScript
        })
        .catch(error => console.error("Error loading task:", error));

    // Update the URL hash (optional for back navigation)
    window.location.hash = taskName;
}

function loadTaskScript(taskName) {
    let script = document.createElement("script");
    script.id = "task-script"; // Assign an ID to manage it later
    script.src = `Tasks/${taskName}.js`; // Load the corresponding script
    script.onload = () => console.log(`${taskName} script loaded`);
    document.body.appendChild(script);
}

function removeOldScript() {
    let oldScript = document.getElementById("task-script");
    if (oldScript) {
        oldScript.remove(); // Remove previously loaded script
    }
}

// Handle loading the task when the user navigates back/forward
window.addEventListener("load", () => {
    let taskFromURL = window.location.hash.replace("#", "");
    if (taskFromURL) {
        loadTask(taskFromURL);
    }
});

