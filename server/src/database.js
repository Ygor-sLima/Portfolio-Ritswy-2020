var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'usuario',
    password : 'senha',
    database : 'database'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});

module.exports = connection;