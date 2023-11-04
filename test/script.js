const { registerUser, loginUser } = require('user-auth');

// Register a new user
const newUser = {
  identifier: 'user@example.com',
  password: 'secretpassword',
  name: 'John Doe',
  // Add any additional properties to the user model as needed
};
registerUser(newUser);

// Test login with correct credentials
const loggedIn = loginUser('user@example.com', 'secretpassword');
if (loggedIn) {
  console.log('Login successful');
//   console.log(loggedIn);
} else {
  console.error('Login failed');
}

// Test login with incorrect password
const wrongPassword = 'wrongpassword';
const loginFailed = loginUser('user@example.com', wrongPassword);
if (!loginFailed) {
  console.log('Login failed as expected');
} else {
  console.error('Login succeeded with incorrect password');
}
