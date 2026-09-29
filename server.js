const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 8080;

const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'secretpassword';
const dbName = process.env.DB_NAME || 'sampledb';

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName
});

// Prueba de conexión opcional para verificar en los logs
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database successfully!');
});

app.get('/', (req, res) => {
  res.send('¡Hola desde mi backend en OpenShift conectado a MySQL!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
