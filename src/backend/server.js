const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;
const SECRET_KEY = "your_secret_key"; 

app.use(cors());
app.use(bodyParser.json());

const usersFile = "users.json";

// Load users from file
const loadUsers = () => {
  if (!fs.existsSync(usersFile)) return [];
  return JSON.parse(fs.readFileSync(usersFile));
};

// Save users to file
const saveUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

// **Signup Route**
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  let users = loadUsers();

  // Check if user already exists
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Add new user
  users.push({ username, password });
  saveUsers(users);

  res.json({ message: "Signup successful" });
});

// **Login Route**
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate token
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

  res.json({ token });
});

// **Protected Route (for testing)**
app.get("/dashboard", (req, res) => {
  const token = req.headers.authorization;

  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token.split(" ")[1], SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });

    res.json({ message: `Welcome, ${decoded.username}!` });
  });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
