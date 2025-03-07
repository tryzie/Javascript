function showTask(taskId) {
    // Hide all sections
    document.querySelectorAll('.task-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(taskId).style.display = 'block';
}

// Initialize by hiding all tasks except the first one
window.onload = function() {
    document.querySelectorAll('.task-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('datatype').style.display = 'block'; // Show the first task by default
};


// function loadTask(taskName) {
//     // Change the title
//     document.getElementById("task-title").innerText = taskName + " Task";
//
//     // Load the task's HTML
//     fetch(`Tasks/${taskName}.html`)
//         .then(response => response.text()) // Get the file content
//         .then(data => {
//             document.getElementById("task-container").innerHTML = data; // Insert into page
//             removeOldScript(); // Remove old script
//             loadTaskScript(taskName); // Load the JavaScript
//         })
//         .catch(error => console.error("Error loading task:", error));
//
//     // Update the URL hash (optional for back navigation)
//     window.location.hash = taskName;
// }
//
// function loadTaskScript(taskName) {
//     let script = document.createElement("script");
//     script.id = "task-script"; // Assign an ID to manage it later
//     script.src = `Tasks/${taskName}.js`; // Load the corresponding script
//     script.onload = () => console.log(`${taskName} script loaded`);
//     document.body.appendChild(script);
// }
//
// function removeOldScript() {
//     let oldScript = document.getElementById("task-script");
//     if (oldScript) {
//         oldScript.remove(); // Remove previously loaded script
//     }
// }
//
// // Handle loading the task when the user navigates back/forward
// window.addEventListener("load", () => {
//     let taskFromURL = window.location.hash.replace("#", "");
//     if (taskFromURL) {
//         loadTask(taskFromURL);
//     }
// });
//
