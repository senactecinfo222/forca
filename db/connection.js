var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'words'
})

var teste

con.connect(function(err){
    if(err) throw err;
    con.query('SELECT COUNT(*) as cont FROM words', function(err,result){
        if(err) throw err;
        teste = result[0].cont
    })
})



