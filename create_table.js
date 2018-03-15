const mysql = require('mysql')

const con = mysql.createConnection({
	host: 'mysql',
	user: 'root',
	password: 'root',
	database: 'sample'
})

con.connect((err) => {
	if (err) throw err
	console.log('Connected!')
	const sql = `
CREATE TABLE json_table
(
	id int unsigned NOT NULL AUTO_INCREMENT,
	json json DEFAULT NULL,
	name VARCHAR(255) DEFAULT NULL,
	PRIMARY KEY (id)
)
	`
	con.query(sql, (err, result) => {
		if (err) throw err
		console.log('Table created')
	})
})
