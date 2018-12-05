// 简单封装一个mysql的查询方法

const mysql = require('mysql')

function query(sql, fn) {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root123456',
        database: 'local'
    })

    connection.connect(function(err) {
        if(err) {
            console.log(err)
            return 
        }else {
            console.log('数据库已连接')
        }
    })
    
    connection.query(sql, function(err, rows, fields) {
        if(err) {
            console.log(err)
            return
        }else {
            // console.log(rows)
            console.log('查询成功')
            fn(rows)
        }
    })
    
    connection.end(function(err) {
        if(err) {
            console.log(err)
            return
        }else {
            console.log('数据库已关闭')
        }
    })
}

module.exports = query