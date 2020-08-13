const formidable = require('formidable');
const fs = require('fs');
const creatNFT = require('./creatNFT');

function uploadImg(req, res){
    var form = new formidable.IncomingForm();
    //Thiết lập thư mục chứa file trên server
    form.uploadDir = "./upload/image/";
    //xử lý upload
    form.parse(req, function (err, fields, file) {
        //path tmp trên server
        var path = file.files.path;
        //thiết lập path mới cho file
        var newpath = form.uploadDir + file.files.name;
        fs.rename(path, newpath, function (err) {
            if (err) throw err;
            res.end('Upload Thanh cong!');
        });
        creatNFT(newpath);
    });
}

function uploadVideo(req, res){
    var form = new formidable.IncomingForm();
    form.uploadDir = "./upload/videos/";
    //xử lý upload
    form.parse(req, function (err, fields, file) {
        // path tmp trên server
        var path = file.files.path;
        //thiết lập path mới cho file
        var newpath = form.uploadDir + file.files.name;
        fs.rename(path, newpath, function (err) {
            if (err) throw err;
            res.end('Upload Thanh cong!');
        });
        // creatNFT(newpath);
    });
}

module.exports = {
    uploadImg,
    uploadVideo
}