const express = require('express');
const router = express.Router();
const getcontent = require('../controller/getContent.Controller');

router.get('/group', (req, res)=>{
    getcontent.getGroupDatabase(req, res);
})

module.exports = router;