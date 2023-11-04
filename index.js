const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

// Mock database
const users = [];

function registerUser(userModel) {
  const existingUser = users.find((user) => user.identifier === userModel.identifier);
  if (existingUser) {
    console.error('User already exists');
    return;
  }

  const uniqueId = uuidv4();
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(userModel.password, saltRounds);
  const newUser = { ...userModel, id: uniqueId, password: hashedPassword };
  users.push(newUser);
  console.log('User registered successfully');
}

function loginUser(identifier, password) {
  const user = users.find((user) => user.identifier === identifier);
  if (!user) return false;
  if(bcrypt.compareSync(password, user.password)) 
    return user;
}

module.exports = { registerUser, loginUser };
