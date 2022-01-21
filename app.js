require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();
const { PORT, MONGODB_URI } = process.env;
const cardController = require("./controllers/card");
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on("error", (err) => {
    console.error(err);
    console.log("MongoDB connection error. Please make sure MongoDB is running.");
    process.exit();
});



app.get("/cards", cardController.list);    

app.get("/cards/delete/:id", cardController.delete);

app.post("/create-card", cardController.create);

app.post("/update/:id", cardController.update);



app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}/cards`);
  });
    
