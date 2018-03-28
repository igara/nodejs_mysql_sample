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

	const params = {
		json: {
			fields: [
				{id: 1, name: 'sample'}
			]
		},
		name: 'sample'
	}
	const query = {
		sql: `
SELECT *
FROM join_a
INNER JOIN join_b
ON join_a.id=join_b.a_id
INNER JOIN join_c
ON join_a.id=join_c.a_id
WHERE join_a.id= ?
	`,
		nestTables: true
	}
	const selects = [1]
	con.query(query, selects, (err, result) => {
		if (err) throw err
		console.log(result)
		console.log('---------------------')
	})
})
