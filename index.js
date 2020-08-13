const express = require('express');
const app = express();

const upload = require('./module/upload');
const getcontent = require('./module/getcontent');

const port = process.env.PORT||3000;

app.use('/upload', upload);
app.use('/getcontent', getcontent);

app.listen(port , ()=>{
    console.log("app listen port "+port);
})