// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");

// const app = express();
// const port = process.env.PORT || 8080;

// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST', 'DELETE', 'PUT'],
//   credentials: true
// }));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('file'), (req, res) => {
//   const file = req.file;
//   if (!file) {
//     return res.status(400).send('Nenhum arquivo foi enviado.');
//   }
//   res.status(200).send('Arquivo enviado com sucesso.');
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Erro interno no servidor.');
// });

// app.listen(port, () => {
//   console.log(`Servidor está rodando em http://localhost:${port}/`);
// });


const express = require("express");
const multer = require("multer");

const app = express();
const port = process.env.PORT || 8080;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

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

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}/`);
});
