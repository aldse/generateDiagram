import axios from "axios";

export const generateDiagram = axios.create({
  baseURL: "http://localhost:8080//api",
});

export const fetchAddressByCep = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = response.data;

    if (data.erro) {
      throw new Error("CEP não encontrado");
    }

    return data;
  } catch (error) {
    throw new Error("Erro ao buscar o CEP");
  }
};
