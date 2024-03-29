const readline = require('readline'); // Import the readline module to create CLI
const fs = require('fs'); // Import the fs module to read files

class StudyPlannerCLI {
  constructor() {
    // Initialize readline interface
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    // Initialize studyPlanner to null
    this.studyPlanner = null;
  }

  // Start the CLI
  start() {
    console.log("Welcome to Study Planner!");

    // Ask user to enter the file path to load module information
    this.rl.question("Enter the file path to load module information: ", (filePath) => {
      // Load module information from the provided file path
      const moduleData = this.loadModuleInformation(filePath);
      // Initialize the StudyPlanner with the loaded module data
      this.studyPlanner = new StudyPlanner(moduleData);
      // Display the main menu options
      this.displayMainMenu();
    });
  }

  // Load module information from file
  loadModuleInformation(filePath) {
    try {
      // Read and parse module information from the file
      const moduleData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      console.log("Module information loaded successfully.");
      return moduleData;
    } catch (err) {
      // Handle errors if file reading or parsing fails
      console.error("Error loading module information:", err);
      process.exit(1); // Exit the process with error status
    }
  }

  // Display main menu options
  displayMainMenu() {
    console.log("\nMain Menu:");
    console.log("1. View Semester Study Profile");
    console.log("2. Plan Study Tasks and Milestones");
    console.log("3. Record Study Progress");
    console.log("4. View Study Dashboard");
    console.log("5. Exit");

    // Ask user to choose an option from the main menu
    this.rl.question("Enter your choice: ", (choice) => {
      // Handle user choice based on selected option
      switch (choice) {
        case '1':
          this.viewSemesterStudyProfile();
          break;
        case '2':
          this.planStudyTasksAndMilestones();
          break;
        case '3':
          this.recordStudyProgress();
          break;
        case '4':
          this.viewStudyDashboard();
          break;
        case '5':
          // Exit the application
          console.log("Exiting Study Planner. Goodbye!");
          this.rl.close(); // Close the readline interface
          break;
        default:
          // Handle invalid input
          console.log("Invalid choice. Please enter a valid option.");
          this.displayMainMenu(); // Display main menu again
      }
    });
  }

  // Implement logic to view semester study profile
  viewSemesterStudyProfile() {
    console.log("View Semester Study Profile selected.");
    this.displayMainMenu(); // Display main menu again
  }

  // Implement logic to plan study tasks and milestones
  planStudyTasksAndMilestones() {
    console.log("Plan Study Tasks and Milestones selected.");
    this.displayMainMenu(); // Display main menu again
  }

  // Implement logic to record study progress
  recordStudyProgress() {
    console.log("Record Study Progress selected.");
    this.displayMainMenu(); // Display main menu again
  }

  // Implement logic to view study dashboard
  viewStudyDashboard() {
    console.log("View Study Dashboard selected.");
    this.displayMainMenu(); // Display main menu again
  }
}

// Example usage:
const studyPlannerCLI = new StudyPlannerCLI(); // Create a new instance of StudyPlannerCLI
studyPlannerCLI.start(); // Start the CLI