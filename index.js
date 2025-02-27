// Write your code in this file!
// Define the currentUser variable
const currentUser = "Mohamed"; // Replace with your actual name or test value

// Define the welcomeMessage variable
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define the excitedWelcomeMessage variable
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// Define the shortGreeting variable
const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;

// Export for testing (if needed in some test setups)
module.exports = { currentUser, welcomeMessage, excitedWelcomeMessage, shortGreeting };
