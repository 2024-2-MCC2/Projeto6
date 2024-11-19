require("dotenv").config();
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require('cors')
const port = process.env.DB_PORTLOCAL || 3010;



const app = express();
app.use(bodyParser.json()); // Para interpretar JSON enviado pelo frontend

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // Importante para cookies de sessão funcionarem
}));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync("./ca.pem"),
    rejectUnauthorized: false,
  },
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Conexão bem-sucedida com o banco de dados MySQL");
  }
});



// Função para salvar dados no banco
function saveToDatabase({ nome, email, tel }) {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO interessado (nome_interessado, email_interessado, telefone_interessado) VALUES (?, ?, ?)";
    connection.query(sql, [nome, email, tel], (err, results) => {
      if (err) {
        return reject({ message: "Erro ao salvar no banco de dados" });
      }
      return resolve({ message: "Dados salvos no banco de dados com sucesso" });
    });
  });
}

// Rota para salvar dados no banco
app.post("/api/save", (req, res) => {
  const { nome, email, tel } = req.body;

  saveToDatabase({ nome, email, tel })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
});


// Iniciar o servidor
// const findFreePort = require("find-free-port"); //Sempre Acha um porta livre
// findFreePort(3500, (err, freePort) => {
//     if (err) {
//       console.error("Erro ao encontrar porta livre:", err);
//       return;
//     }

//     app.listen(freePort, () => {
//       console.log(`Servidor rodando na porta http://localhost:${port} `) ;
//     });
//   });
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
