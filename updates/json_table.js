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
	const query = 'UPDATE mypage_level SET ? where id = ?';

	const sql = `
UPDATE json_table SET ? WHERE id = ?
	`;
	const updates = {
		json: JSON.stringify(params.json),
		name: params.name
	}
	con.query(sql, [updates, 1], (err, result) => {
		if (err) throw err;
		console.log('Update created');
	});
});
