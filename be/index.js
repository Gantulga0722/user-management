const express = require("express");
const { products, users } = require("./dummy.json");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const fs = require("fs");
const { error } = require("console");

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

app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});
