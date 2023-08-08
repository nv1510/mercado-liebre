const express = require("express");
const path = require("path");
const app = express();


app.use(express.static("public"));

app.get(["/", "/home"], (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto:  ${PORT}`);
});



