import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchAddressByCep } from '../api/genereateDiagram';

const mock = new MockAdapter(axios);

describe('fetchAddressByCep', () => {
  afterEach(() => {
    mock.reset();
  });

  it('deve retornar dados de endereço com sucesso', async () => {
    const cep = '01001000';
    const mockResponse = {
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP'
    };

    mock.onGet(`https://viacep.com.br/ws/${cep}/json/`).reply(200, mockResponse);

    const result = await fetchAddressByCep(cep);
    expect(result).toEqual(mockResponse);
  });

  it('deve lançar um erro quando o CEP não for encontrado', async () => {
    const cep = '99999999';
    
    mock.onGet(`https://viacep.com.br/ws/${cep}/json/`).reply(200, { erro: true });
  
    await expect(fetchAddressByCep(cep)).rejects.toThrow('Erro ao buscar o CEP');
  });
  

  it('deve lançar um erro quando ocorrer um erro na requisição', async () => {
    const cep = '01001000';
    
    mock.onGet(`https://viacep.com.br/ws/${cep}/json/`).networkError();

    await expect(fetchAddressByCep(cep)).rejects.toThrow('Erro ao buscar o CEP');
  });
});
