// This function creates a login tracker for a specific user.
// Keeps track of login attempts
function createLoginTracker(userInfo) {
  // Counts the number of login attempts.
  let attemptCount = 0;

  // This inner function runs every time a login attempt happens.
  return function (passwordAttempt) {

    // If user already tried 3 times, the account should stay locked.
    if (attemptCount >= 3) {
      return 'Account locked due to too many failed login attempts';
    }

    // Increase attempt count for each password attempt.
    attemptCount++;

    // If the entered password is correct, login is successful.
    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    }

    // If the entered password is wrong, return the attempt number.
    return `Attempt ${attemptCount}: Login failed`;
  };
}
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
