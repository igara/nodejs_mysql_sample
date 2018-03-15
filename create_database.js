const mysql = require('mysql')

const con = mysql.createConnection({
	host: 'mysql',
	user: 'root',
	password: 'root'
})

con.connect((err) => {
	if (err) throw err
	console.log('Connected!')
	const sql = `
CREATE DATABASE sample CHARACTER SET utf8
	`
	con.query(sql, (err, result) => {
		if (err) throw err
		console.log('Database created')
	})
})
