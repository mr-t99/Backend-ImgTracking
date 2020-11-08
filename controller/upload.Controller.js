const formidable = require('formidable');
const fs = require('fs');
const creatNFT = require('./creatNFT');
const db = require('../database/db');
const cn = db.createConnection();
const DOMAIN = process.env.FIRA_DB_PSW || 'localhost:4000';

async function uploadImg(req, res) {
    var form = new formidable.IncomingForm();
    //Thiết lập thư mục chứa file trên server
    form.uploadDir = "./upload/image/";
    //xử lý upload
    const object = await new Promise(tv => {
        form.parse(req, function (err, fields, file) {
            //path tmp trên server
            var path = file[''].path;
            //thiết lập path mới cho file
            var newpath = form.uploadDir + file[''].name;
            var nameNft = file[''].name.split('.')[0];

            fs.rename(path, newpath, function (err) {
                if (err) return res.send({
                    message:err
                });
            });
            creatNFT(newpath);
            var object = {
                n_image: file[''].name,
                l_image: `${DOMAIN}/image/${file[''].name}`,
                l_nft: `${DOMAIN}/nft/${nameNft}`
            };
            tv(object);
        });
    })
    res.send({
        object
    });
    // const sql = `INSERT INTO image (id, n_image, l_image, l_nft) VALUES (NULL, '${object.n_image}', '${object.l_image}', '${object.l_nft}')`;
    // cn.query(sql, (err)=>{
    //     if(err) return res.status(400).send(err);
    //     res.status(200).send({
    //         message:"Data saving is complete"
    //     })
    // })
}

async function uploadVideo(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = "./upload/videos/";
    //xử lý upload
    const object = await new Promise(tv=>{
        form.parse(req, function (err, fields, file) {
            // path tmp trên server
            var path = file.files.path;
            //thiết lập path mới cho file
            var newpath = form.uploadDir + file.files.name;
            fs.rename(path, newpath, function (err) {
                if (err) return res.send({
                    message:err
                });
            });
            var object = {
                n_video: file.files.name,
                l_video: `${DOMAIN}/getcontent/video/${file.files.name}`
            };
            tv(object);
        });
    });
    const sql = `INSERT INTO videos (id, n_video, l_video) VALUES (NULL, '${object.n_video}', '${object.l_video}')`;
    cn.query(sql, (err)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send({
            message:"Data saving is complete"
        })
    })
}

module.exports = {
    uploadImg,
    uploadVideo
}