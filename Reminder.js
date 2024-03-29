class ReminderManager {
    constructor() {
      this.reminders = []; // Initialize reminders array to store reminders
    }
  
    // Add a reminder for a task or milestone
    addReminder(itemName, itemType, deadline) {
      this.reminders.push({ itemName, itemType, deadline }); // Push reminder object into reminders array
    }
  
    // Schedule reminders for tasks and milestones
    scheduleReminders() {
      this.reminders.forEach((reminder) => { // Iterate over reminders array
        const timeUntilDeadline = reminder.deadline - Date.now(); // Calculate time until deadline
        if (timeUntilDeadline > 0) { // If time until deadline is positive
          setTimeout(() => { // Set timeout to trigger reminder
            console.log(`Reminder: Deadline for ${reminder.itemType} '${reminder.itemName}' is approaching!`); // Log reminder message
          }, timeUntilDeadline); // Set timeout duration
        }
      });
    }
  
    // Cancel reminder for a specific task or milestone
    cancelReminder(itemName) {
      const index = this.reminders.findIndex((reminder) => reminder.itemName === itemName); // Find index of reminder with given item name
      if (index !== -1) { // If reminder exists
        this.reminders.splice(index, 1); // Remove reminder from reminders array
        console.log(`Reminder for ${this.reminders[index].itemType} '${itemName}' canceled successfully.`); // Log cancellation message
      } else {
        console.log(`No reminder found for ${itemName}`); // Log error message if reminder not found
      }
    }
  }