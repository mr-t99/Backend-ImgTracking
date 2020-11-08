const express = require('express');
const app = express();
var cors = require('cors');

const upload = require('./module/upload');
const getcontent = require('./module/getcontent');

const port = process.env.PORT||4000;
app.use(cors());

app.use( ('/image'), express.static('./upload/image'))
app.use( ('/video'), express.static('./upload/videos'))
app.use( ('/nft'), express.static('./upload/nftfile'))

app.use('/upload', upload);
app.use('/getcontent', getcontent);

app.listen(port , ()=>{
    console.log("app listen port "+port);
})