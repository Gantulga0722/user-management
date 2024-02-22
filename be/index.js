const express = require("express");
const { products, users } = require("./dummy.json");
const allData = require("./dummy.json");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const fs = require("fs");
const { error } = require("console");

app.get("/users", (req, res) => {
  res.type = "application/json";
  res.send({ allData: allData });
});

app.post("/add-user", (req, res) => {
  const newUser = req.body;

  fs.readFile("dummy.json", (error, data) => {
    console.log(data);
    if (error) {
      console.log("Error in reading file");
    } else {
      const jsonFile = JSON.parse(data.toString());
      jsonFile.users.push(newUser);
      fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
        if (err) {
          console.log(err);
          res.send("error happened");
        } else {
          console.log("success");
          res.send("User added successfully");
        }
      });
    }
  });
  res.status(200);
  res.send("User added successfully");
});

app.post("/add-product", (req, res) => {
  const newProduct = req.body;

  fs.readFile("dummy.json", (error, data) => {
    console.log(data);
    if (error) {
      console.log("Error in reading file");
    } else {
      const jsonFile = JSON.parse(data.toString());
      jsonFile.products.push(newProduct);
      fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
        if (err) {
          console.log(err);
          res.send("error happened");
        } else {
          console.log("success");
          res.send("User added successfully");
        }
      });
    }
  });
  res.status(200);
  res.send("User added successfully");
});

app.delete("delete-user", (req, res) => {
  const idToDelete = req.body;
});

app.post("update-user", (req, res) => {
  const { id, updatedData } = req.body;
});

app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});

const newUser = {
  id: 123,
  name: "Ali",
  age: 23,
  surename: "Khan",
  email: "asd",
};

const updateData = {
  age: 15,
  email: "andyerderne@gmail.com",
};

const updatedData = {
  ...newUser,
  ...updateData,
};

function reedFile() {
  return users;
}

function writeFile(users) {}
