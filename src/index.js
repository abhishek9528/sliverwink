const express = require("express");
const app = express();
const hbs = require("hbs");
const mongo = require("../DB/database")
const PORT = process.env.PORT || 3889;
app.set("view engine", "hbs");
app.get("/login", (req, res) => {
    res.render("login");
})
app.listen(PORT, () => {
    console.log("Server is started at port " + PORT);
})