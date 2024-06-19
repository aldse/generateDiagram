import json

def geraruml(arquivo_json):
    with open(arquivo_json, 'r') as f:
        lendoArq = json.load(f)

    armazenarUml = ""
    
    for nomeClasse, atributos in lendoArq.items():
        linhascAtibutos = [f"+ {attr}: {typeDele}" for attr, typeDele in atributos.items()]
        
        armazenarUml += f"class {nomeClasse} {{\n"
        armazenarUml += "\n".join(linhascAtibutos)  # Adiciona os atributos formatados
        armazenarUml += "\n}\n\n"  # Fecha a classe com duas quebras de linha para separação
    
    # Retorna a string final com o código UML gerado para todas as classes no arquivo JSON
    return armazenarUml

arquivo_json = 'teste.json'

uml_code = geraruml(arquivo_json)

with open('diagrama7.uml', 'w') as f:
    f.write(uml_code)

print("Diagrama UML gerado com sucesso!")
