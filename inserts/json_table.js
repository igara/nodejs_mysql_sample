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
INSERT INTO json_table (
	json,
	name
) VALUES ?
	`;
	const params = {
		json: {
			fields: [
				{id: 1, name: 'sample'}
			]
		},
		name: 'sample'
	}

	const inserts = [[
		[JSON.stringify(params.json), params.name]
	]]
	con.query(sql, inserts, (err, result) => {
		if (err) throw err;
		console.log('Insert created');
	});
});
