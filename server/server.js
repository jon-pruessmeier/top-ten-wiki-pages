const express = require('express');
const path = require('path');

const app = express();


const parentDir = path.join(__dirname, '..');
const buildPath = path.join(parentDir, '/client/build/');
const indexHTML = path.join(buildPath, 'index.html');
const static = path.join(parentDir, '/static/');


let jsonData;

const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["./wikipedia-crawler/main.py"]); 

pythonProcess.stdout.on('data', (data) => {
    jsonData = JSON.parse(data.toString());
    console.log(jsonData);
});

app.get('/articles', (req, res) => {
    if (jsonData){
        res.status(200).send(jsonData);
    } else {
        res.status(400).send();
    }
})

app.get('/', (req, res) => {
    console.log(indexHTML);
    res.sendFile(indexHTML);
});

app.use(express.static('./static'));

app.get('/:file', (req,res) => {
    const file = path.join(buildPath, req.params.file);
    console.log(file);
    res.sendFile(file);
}) 


app.listen(8000, () => {
    console.log('Server listening on Port 8000');
});
