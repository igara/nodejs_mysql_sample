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
INSERT INTO join_a (
	id
) VALUES ?
		`
	let inserts = [[
		[1],
		[2],
		[3]
	]]
	con.query(sql, inserts, (err, result) => {
		if (err) throw err
		console.log('Insert created')
	})
	sql = `
INSERT INTO join_b (
	id,
	a_id
) VALUES ?
		`
	inserts = [[
		[1, 1],
		[2, 1],
		[3, 1]
	]]
	con.query(sql, inserts, (err, result) => {
		if (err) throw err
		console.log('Insert created')
	})
	sql = `
	INSERT INTO join_c (
		id,
		a_id
	) VALUES ?
			`
	inserts = [[
		[1, 1],
		[2, 1],
		[3, 1]
	]]
	con.query(sql, inserts, (err, result) => {
		if (err) throw err
		console.log('Insert created')
	})
})
