//imports

const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const { PORT } = require("./constants.js");

// local variables
const app = express();


//configs
handlebarsConfig(app);
expressConfig(app);


// routing
app.get("/", (req, res) => {
    res.render("index");
});
// port listing

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));