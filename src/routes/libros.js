const express = require('express');
const router  = express.Router();

const mysqlConnection = require('../database.js');

// GET all books
router.get('/', ( req, res ) => {
    mysqlConnection.query('SELECT * from libros', ( err, rows, fields ) => {
        if ( !err ) {
            res.json( rows );
        } else {
            console.log( err );
        }
    });
});


module.exports = router;