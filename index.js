// external imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// internal imports
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route.js");
const errorHandler = require("./middleware/errorHandler");

// connection build-up
const app = express();
const port = process.env.PORT || 5000;

// application level middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// connection with DB
dbConnect();

// external routing
app.use("/api/v1/tools", toolsRoutes);

// application level routing
app.get("/", (req, res) => {
  res.render("home.ejs", {
    id: 5,
    user: {
      name: "test",
    },
  });
});

app.all("*", (req, res) => {
  res.send("NO route found.");
});

// global error handler
app.use(errorHandler);

// enable connecton
app.listen(port, ()=>{
  console.log(`App listening on port: ${port}.`);
})
