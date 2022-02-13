const express = require('express');
const path = require('path');

const parentDir = path.join(__dirname, "..");
const clientDir = path.join(parentDir, 'client');
const buildDir = path.join(clientDir, 'build');
const indexHTML = path.join(buildDir, 'index.html');
const staticDir = path.join(buildDir, 'static');

const app = express();

const PORT = process.env.PORT || 8000;

let jsonData;
const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["./wikipedia-crawler/main.py"]); 

pythonProcess.stdout.on('data', (data) => {
    jsonData = JSON.parse(data.toString());
    console.log(typeof jsonData);
    console.log(jsonData);
    console.log(jsonData.length);
});


app.get('/articles', (req, res) => {
    if (jsonData){
        res.status(200).send(JSON.stringify(jsonData));
    } else {
        res.status(400).send();
    }
})

app.get('/', (req, res) => {
    res.sendFile(indexHTML);
});

app.use(express.static(buildDir));



app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});
