// Call the library
const mysql = require('mysql');

// For mysql connection
const mysqlConnection = mysql.createConnection({
    host               : 'localhost',
    user               : 'root',
    password           : 'admin',
    database           : 'libros',
    multipleStatements : true
});

// For mysql connect
mysqlConnection.connect( function ( err ) {
    if ( err ) {
        console.error(err);
        return;
    } else {
        console.log('db is connected');
    }
});


// Export MysqlConnection
module.exports = mysqlConnection;