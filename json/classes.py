import json

class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
    
    @staticmethod
    def get_class_structure():
        return {
            "nome": "string",
            "idade": "int"
        }

class Aluno(Pessoa):
    def __init__(self, nome, idade, matricula):
        super().__init__(nome, idade)
        self.matricula = matricula
    
    @staticmethod
    def get_class_structure():
        structure = Pessoa.get_class_structure()
        structure.update({
            "matricula": "string"
        })
        return structure

class Professor(Pessoa):
    def __init__(self, nome, idade, disciplina):
        super().__init__(nome, idade)
        self.disciplina = disciplina
    
    @staticmethod
    def get_class_structure():
        structure = Pessoa.get_class_structure()
        structure.update({
            "disciplina": "string"
        })
        return structure

class_structures = {
    "Pessoa": Pessoa.get_class_structure(),
    "Aluno": Aluno.get_class_structure(),
    "Professor": Professor.get_class_structure()
}

with open('classe1.json', 'w') as f:
    json.dump(class_structures, f, indent=2)

print("Estrutura das classes salva em estrutura_classes.json")
