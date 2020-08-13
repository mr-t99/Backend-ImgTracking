const express = require('express');
const router = express.Router();
const getcontent = require('../controller/getContent.Controller');

router.get('/image/:name', (req, res)=>{
    getcontent.getImage(req, res);
})

router.get('/imgasset', (req, res)=>{
    getcontent.getImgAsset(req, res);
})

router.get('/video/:name', (req, res)=>{
    getcontent.getVideo(req, res);
})

router.get('/videoasset', (req, res)=>{
    getcontent.getVideoAsset(req, res);
})

router.get('/nftfile/:name', (req, res)=>{
    getcontent.getNftFile(req, res);
})

router.get('/linknft/:name', (req, res)=>{
    getcontent.getLink(req, res);
})

module.exports = router;