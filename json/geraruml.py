import json

def determinar_tipo(valor):
    try:
        # Tenta converter o valor para int
        int_valor = int(valor)
        return "int"
    except ValueError:
        try:
            # Tenta converter o valor para float
            float_valor = float(valor)
            return "float"
        except ValueError:
            # Se não for possível converter para int ou float, assume como string
            return "string"

def geraruml(arquivo_json):
    with open(arquivo_json, 'r') as f:
        dados = json.load(f)

    armazenarUml = ""

    for nomeClasse, atributos in dados.items():
        linhasAtributos = []

        for attr, typeDele in atributos.items():
            if isinstance(typeDele, dict):
                # Se o valor do atributo for um dicionário, trata como sub-atributo
                for sub_attr, sub_type in typeDele.items():
                    tipo = determinar_tipo(sub_type)
                    linhasAtributos.append(f"+ {attr}.{sub_attr}: {tipo}")
            else:
                tipo = determinar_tipo(typeDele)
                linhasAtributos.append(f"+ {attr}: {tipo}")

        armazenarUml += f"class {nomeClasse} {{\n"
        armazenarUml += "\n".join(linhasAtributos)
        armazenarUml += "\n}}\n\n"

    return armazenarUml

arquivo_json = 'classe3.json'  
uml_code = geraruml(arquivo_json)

with open('diagrama1.txt', 'w') as f:
    f.write(uml_code)

print("Diagrama UML gerado com sucesso!")
