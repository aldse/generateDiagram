const express = require("express");
const cors = require('cors');
const app = express();
const multer = require("multer");

const port = process.env.PORT || 8080;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'C:\\Users\\aluno\\Desktop\\generateDiagram\\Backend\\uploads\\');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const CORS_ALLOWED_ORIGINS = [
  'http://localhost:3000'
];

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('Nenhum arquivo foi enviado.');
  }
  res.status(200).send('Arquivo enviado com sucesso.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno no servidor.');
});

app.use(cors({
  origin: CORS_ALLOWED_ORIGINS,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}/`);
});
