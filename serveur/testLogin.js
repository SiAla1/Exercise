const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
    // connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
});

// Create a new Express application
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());

// Define a login endpoint
app.post('/api/login', (req, res) => {
    // Extract the username and password from the request body
    const { login, password } = req.body;

    // Query the MySQL database to check if the username and password combination exists
    pool.query('SELECT * FROM users WHERE login = ? AND password = ?', [login, password], (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,

            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                test: false,

            });
        }

        // Generate a JWT and send it back to the client
        // const token = jwt.sign({ login }, 'my_secret_key');
        return res.status(200).json({
            test: true,
            // token
        });
    });
});

// Start the server
app.listen(3100, () => {
    console.log('Server started on port 3100');
});