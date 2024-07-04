const multer = require('multer');
const { exec } = require('child_process');
const path = require('path');

class UploadController {
    static storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname);
        }
    });

    static upload = multer({ storage: UploadController.storage }).single('file');

    static async uploadFile(req, res) {
        try {
            UploadController.upload(req, res, (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Erro ao fazer upload do arquivo.' });
                }

                const filePath = path.join(__dirname, '../', req.file.path);

                exec(`python3 process_zip.py ${filePath}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Erro ao executar script Python: ${error.message}`);
                        return res.status(500).json({ message: 'Erro ao processar o arquivo.' });
                    }
                    if (stderr) {
                        console.error(`Erro no script Python: ${stderr}`);
                        return res.status(500).json({ message: 'Erro ao processar o arquivo.' });
                    }

                    console.log(`Saída do script Python: ${stdout}`);
                    res.status(200).json({ message: 'Arquivo processado com sucesso.' });
                });
            });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao fazer upload do arquivo.', data: error.message });
        }
    }
}

module.exports = UploadController;
