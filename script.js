// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Define a function to handle clicks on the "Plan Study Tasks" button
    function planStudyTasks() {
        // Placeholder function for handling the "Plan Study Tasks" button click
        console.log("Planning study tasks...");
        // You can add your logic here to handle what happens when the button is clicked
    }

    // Define a function to handle clicks on the "View Study Dashboard" button
    function viewStudyDashboard() {
        // Placeholder function for handling the "View Study Dashboard" button click
        console.log("Viewing study dashboard...");
        // You can add your logic here to handle what happens when the button is clicked
    }

    // Define a function to handle clicks on the "Manage Profile" button
    function manageProfile() {
        // Placeholder function for handling the "Manage Profile" button click
        console.log("Managing profile...");
        // You can add your logic here to handle what happens when the button is clicked
    }

    // Get references to the buttons
    const planTasksButton = document.querySelector('.button:nth-of-type(1)');
    const viewDashboardButton = document.querySelector('.button:nth-of-type(2)');
    const manageProfileButton = document.querySelector('.button:nth-of-type(3)');

    // Attach event listeners to the buttons
    planTasksButton.addEventListener('click', planStudyTasks);
    viewDashboardButton.addEventListener('click', viewStudyDashboard);
    manageProfileButton.addEventListener('click', manageProfile);
});