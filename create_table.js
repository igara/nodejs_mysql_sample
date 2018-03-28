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
	let sql = `
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

	sql = `
CREATE TABLE join_a
(
	id int unsigned NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id)
)
	`
	con.query(sql, (err, result) => {
		if (err) throw err
		console.log('Table created')
	})

	sql = `
CREATE TABLE join_b
(
	id int unsigned NOT NULL AUTO_INCREMENT,
	a_id int unsigned NOT NULL,
	PRIMARY KEY (id)
)
	`
	con.query(sql, (err, result) => {
		if (err) throw err
		console.log('Table created')
	})

	sql = `
CREATE TABLE join_c
(
	id int unsigned NOT NULL AUTO_INCREMENT,
	a_id int unsigned NOT NULL,
	PRIMARY KEY (id)
)
	`
	con.query(sql, (err, result) => {
		if (err) throw err
		console.log('Table created')
	})
})
