// database.js

// Simulated in-memory database for storing semester profiles
const semesterProfiles = [];

// Function to add a new semester profile to the database
function addSemesterProfile(profile) {
  semesterProfiles.push(profile);
}

// Function to retrieve all semester profiles from the database
function getAllSemesterProfiles() {
  return semesterProfiles;
}

module.exports = { addSemesterProfile, getAllSemesterProfiles };