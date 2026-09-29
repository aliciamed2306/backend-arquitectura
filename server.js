const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 8080;

const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'secretpassword';
const dbName = process.env.DB_NAME || 'sampledb';

console.log(`Intentando conectar a MySQL en el host: ${dbHost} con el usuario: ${dbUser}`);

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName
});

connection.connect((err) => {
  if (err) {
    console.error('ERROR CRITICO DE CONEXIÓN A MYSQL:', err);
    return;
  }
  console.log('¡Conexión a MySQL establecida con éxito!');
});

app.get('/', (req, res) => {
  res.send('¡Hola desde mi backend en OpenShift conectado a MySQL!');
});

app.listen(port, () => {
  console.log(`Servidor web corriendo y escuchando en el puerto ${port}`);
});
