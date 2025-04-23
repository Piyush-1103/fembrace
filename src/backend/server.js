const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config(); 

const mongoose = require("./db");
const User = require("./models/users");

const app  = express();
const PORT = 5001;
const SECRET_KEY = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
  
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    
    if (existingUser) 
    return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } 
  
  catch (err) {
    console.error("Signup error:", err);    
    res.status(500).json({ message: "Signup error", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    
    if (!user) 
    return res.status(401).json({ message: "Invalid credentials.User doesn't exist" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) 
    return res.status(401).json({ message: "Invalid credentials.Password is incorrect" });

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn:"30m" });
    res.json({ token });
  } 
  
  catch (err){
    res.status(500).json({ message: "Login error", error: err.message }); 
  }
});


app.get("/dashboard", (req, res) => {

  const token = req.headers.authorization;

  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token.split(" ")[1], SECRET_KEY, (err, decoded) => {
    
    if (err) return res.status(401).json({ message: "Invalid token" });
    res.json({ message: `Welcome, ${decoded.username}!` });
  });

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));