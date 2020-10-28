const express = require('express');
const app = express();
var cors = require('cors');

const upload = require('./module/upload');
const getcontent = require('./module/getcontent');

const port = process.env.PORT||3000;
app.use(cors());
app.use('/upload', upload);
app.use('/getcontent', getcontent);

app.listen(port , ()=>{
    console.log("app listen port "+port);
})