const express = require('express');
const app = express();

const upload = require('./module/upload');

const port = process.env.PORT||3000;

app.use('/upload', upload);

app.listen(port , ()=>{
    console.log("app listen port "+port);
})