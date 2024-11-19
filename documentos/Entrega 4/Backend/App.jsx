require("dotenv").config(); // Para usar variáveis de ambiente
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const findFreePort = require("find-free-port");
const app = express();
const port = process.env.APP_PORT || 5500;


require("dotenv").config();
const fs = require("fs");
const bodyParser = require("body-parser");
const mysql = require("mysql2");


// db
app.use(bodyParser.json()); // Para interpretar JSON enviado pelo frontend
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
function saveToDatabase({ nome, email, tel }) {
  return new Promise((resolve, reject) => {
    // Verifica se os dados necessários estão presentes
    if (!nome || !email || !tel) {
      return reject({ message: "Nome, email e telefone são obrigatórios." });
    }

    const sql =
      "INSERT INTO interessado (nome_interessado, email_interessado, telefone_interessado) VALUES (?, ?, ?)";

    // Executa a consulta
    connection.query(sql, [nome, email, tel], (err, results) => {
      if (err) {
        // Log detalhado do erro
        console.error("Erro ao salvar dados no banco:", err.message);

        // Verifica se o erro é de autorização
        if (err.code === 'ER_ACCESS_DENIED_ERROR') {
          return reject({ message: "Erro de autorização: acesso negado ao banco de dados." });
        }

        // Outros erros
        return reject({ message: "Erro ao salvar no banco de dados", error: err });
      }

      // Responde com sucesso
      return resolve({ message: "Dados salvos no banco de dados com sucesso", results });
    });
  });
}
app.post("/api/save", (req, res) => {
  const { nome, email, tel } = req.body;

  saveToDatabase({ nome, email, tel })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
});


// Middleware
app.use(cors({
  origin: 'http://localhost:5174',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // Importante para cookies de sessão funcionarem
}));
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// Função para enviar email
function sendEmail({ email, nome, tel }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Seu email no .env
        pass: process.env.EMAIL_PASS, // Sua senha ou senha de app no .env
      },
    });

    const mail_configs = {
      from: process.env.EMAIL_USER, // Remetente enviado no formulário
      to: process.env.APP_EMAILRECEIVER, // Destinatário (seu email)
      subject: `Contato de: ${nome}`, // Assunto com o nome do remetente
      text: `Telefone: ${tel}\nEmail: ${email}`, // Corpo do email com os dados
    };

    transporter.sendMail(mail_configs, (error, info) => {
      if (error) {
        console.error("Erro ao enviar email:", error);
        return reject({ message: "Erro ao enviar o email" });
      }
      console.log("Email enviado com sucesso:", info.response);
      return resolve({ message: "Email enviado com sucesso" });
    });
  });
}

// Rota para envio de email
app.get("/", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));

  const { nome, email, tel } = req.body;
  saveToDatabase({ nome, email, tel })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
});


findFreePort(5000, (err, freePort) => {
  if (err) {
    console.error("Erro ao encontrar porta livre:", err);
    return;
  }

  app.listen(freePort, () => {
    console.log(`Servidor rodando na porta http://localhost:${port} `);
  });
});

// Inicializar servidor
// app.listen(port, () => {
//   console.log(`nodemailerProject is listening at http://localhost:${port}`);
// });