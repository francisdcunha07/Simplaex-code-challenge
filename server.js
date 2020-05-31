const express = require('express');
const path = require('path');
const app = express();
const Port = 8080;


app.use(express.static(__dirname + "/Js"));
app.use(express.static(__dirname ));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')); 
})

app.listen(Port, () => console.log(`Server running on port ${Port}`));