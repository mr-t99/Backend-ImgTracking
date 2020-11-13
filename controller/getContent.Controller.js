const fs = require('fs');
const db = require('../database/db');
const { query } = require('express');
const cn = db.createConnection();
const domain = 'http://localhost:3000'

function getGroupDatabase(req, res){
    var sql = `SELECT id, name FROM groups`;
    cn.query(sql, (err, result)=>{
        if(err) return res.status(400).send(err);
        if(Object.keys(result).length === 0){
            return res.status(404).send({
                message:"Không có Group nào"
            });
        }
        res.send(result)
    })
}

module.exports = {
    getGroupDatabase
}