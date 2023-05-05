const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

// Create a MySQL connection pool
const db = mysql.createPool({
    // connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
});

const app = express();

app.get('/api/etudiant', (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'secret-key', (err, decoded) => {
            if (err) {
                res.status(401).send('Invalid token');
            } else {
                db.query("SELECT * FROM etudiant", function (err, result, fields) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(200).send(result)
                    }
                });
            }

        });
    }
});

app.listen(3100, () => console.log(`Hello world app listening on port 3100!`));