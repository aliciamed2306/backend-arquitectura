const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 8080;

// Se conecta usando la variable de entorno DB_HOST que viene del ConfigMap
const dbHost = process.env.DB_HOST || 'localhost';

const connection = mysql.createConnection({
  host: dbHost,
  user: 'root',
  password: 'secretpassword',
  database: 'sampledb'
});

app.get('/', (req, res) => {
  connection.ping((err) => {
    if (err) {
      res.send('Backend funcionando, pero error al conectar con MySQL: ' + err.message);
    } else {
      res.send('¡Hola Alicia! Backend conectado exitosamente a MySQL en el host: ' + dbHost);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
