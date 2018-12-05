const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const querysql = require('../mysql')

router.all('*', function(req, res, next) {
    // res.send('use router ')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    console.log('拦截成功')
    next()
})

router.get('/first', function(req, res) {
    querysql('select * from user', function(data) {
        res.set('Content-Type', 'text/json')
        res.status(200)
        res.json(data)
        res.end()
    })   
})

router.post('/addUser', function(req, res) {
    let name = req.body.name || ''
    let password = req.body.password || '' 
    if(name!=='' && password!==''){
        querysql('insert into user (name, password) value ("'+name+'","'+password+'");', function(data) {
            res.status(200).json({status: 200, desc: '新增成功'})
            res.end()
        })
    }else {
        res.status(400).json({status: 400, desc: '插入失败'})
        res.end()
    }  
})

router.post('/login', function(req, res) {
    let name = req.body.name || ''
    let password = req.body.password || '' 
    querysql('select name from user where name="'+name+'"', function(data) {
        if(name !== '' && data.length>0 && name === data[0].name) {
            querysql('select password from user where password="'+password+'"', function(passSql) {
                if(password !== '' && passSql.length>0 &&  password === passSql[0].password) {
                    res.json({status: 200, data: 'true', desc: '登陆成功'})
                }else {
                    res.json({status: 200, data: 'false', desc: '密码错误'})
                }
            })
        }else {
            res.json({status: 200, data: 'false', desc: '该用户名不存在'})
        }
    })
})

module.exports = router;
