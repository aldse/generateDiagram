const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

class UserController {
    static async register(req, res) {
        try {
            const { name, dateBirth, email, cpf, edv, cep, street, number, complement, password, confirmPassword } = req.body;

            if (!name) return res.status(400).json({ message: "Nome é obrigatório" });
            if (!dateBirth) return res.status(400).json({ message: "Data de nascimento é obrigatória" });
            if (!email) return res.status(400).json({ message: "Email é obrigatório" });
            if (!cpf) return res.status(400).json({ message: "CPF é obrigatório" });
            if (!street) return res.status(400).json({ message: "Rua é brigatória" });
            if (!number) return res.status(400).json({ message: "Numero é obrigatório" });
            if (!complement) return res.status(400).json({ message: "Complemento necessario" });
            if (!edv) return res.status(400).json({ message: "EDV é obrigatório" });
            if (!password) return res.status(400).json({ message: "Senha é obrigatória" });
            if (password !== confirmPassword) return res.status(400).json({ message: "As senhas não são iguais" });
            if (!cep) return res.status(400).json({ message: "CEP é obrigatório" });

            const emailExist = await User.findOne({ email: email });
            if (emailExist) return res.status(422).json({ message: "Email já cadastrado" });
            
            const cpfExist = await User.findOne({ cpf: cpf });
            if (cpfExist) return res.status(422).json({ message: "CPF já cadastrado" });

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                name,
                dateBirth,
                email,
                cpf,
                edv,
                password: hashedPassword,
                cep,
                street,
                number,
                complement,
                createdAt: Date.now()
            });

            await newUser.save();
            res.status(201).send({ message: "Usuário cadastrado com sucesso" });
        } catch (error) {
            res.status(500).send({ message: "Erro ao cadastrar", data: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { edv, password } = req.body;

            if (!edv) return res.status(400).json({ message: "EDV é obrigatório" });
            if (!password) return res.status(400).json({ message: "Senha é obrigatória" });

            const user = await User.findOne({ edv: edv });
            if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) return res.status(401).json({ message: "Senha inválida" });

            const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '24h' });
     
            res.status(200).json({ message: "Login bem-sucedido", token: token });
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Erro ao fazer login", data: error.message });
        }
    }
}

module.exports = UserController;
