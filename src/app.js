const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.get("/", (req, res) => {
  res.send("Landing page hit");
});

app.get("/signup", (req, res) => {
  res.send("hit");
});

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Probir",
    lastName: "Dey",
    emailId: "probir.dey@gmail.com",
    password: "puma@123",
  });

  try {
    await user.save();
    res.send("user added successfully");
  } catch (err) {
    res.status(400).send("Erro saving the data:", err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database established successfull");
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database connection failed: " + err.message);
  });
