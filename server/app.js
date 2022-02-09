const express = require('express');

const app = express();

const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["../wikipedia-crawler/main.py"]);
let jsonData;
pythonProcess.stdout.on('data', (data) => {
    //console.log(data);
    const temp = JSON.parse(data.toString());
    jsonData = temp;
});

app.get('/hello', (req, res) => {
    res.send(jsonData);
});

app.listen(8000, () => {
    console.log('Server listening on Port 8000');
})