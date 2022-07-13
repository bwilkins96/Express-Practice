const express = require('express');
const app = express();
// Your code here
//require("dotenv").config();

app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is listening on port', port));

//SECRET_MESSAGE="Hello from command-line!" node app.js
