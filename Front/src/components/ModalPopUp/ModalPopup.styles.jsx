import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: #367aa7;
  display: flex;
  flex-direction: column;
  align-items: center; 
  position: relative;
`;

export const DekstopModalContainer = styled(ModalContainer)`
  z-index: 9999;
  width: 100vw;
  height: 105vh;
  position: absolute;
  top: -2%;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
`;

export const Header = styled.h3`
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 500;
  color: #367aa7;
  font-size: 20px;
  line-height: 1.5em; 
  margin: 0px 0 5px;
  display: flex;
  align-items: center;
  word-break: break-word; /* Quebra palavras longas */
`;

export const Titulo = styled.h3`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #367aa7;
  font-size: 40px;
  line-height: 3em;
  margin: 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: center; 
  word-break: break-word; /* Quebra palavras longas */
`;

export const VAMBORA = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 22%;
  height: 100%;
  padding: 1.5rem;
  position: relative;
  overflow: auto; /* Garante que o conteúdo não saia do modal */
`;

export const Botao = styled.button`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: #367aa7;
  color: white;
  font-size: 25px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 70px;
  left: 50%; 
  transform: translateX(-50%);
  border-radius: 25% 10%;
`;

export const Botao1 = styled.button`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: orange;
  color: white;
  font-size: 19px;
  padding: 10px 20px;
  border: none;
  margin: 1%;
  margin-top: 9%;
  border-radius: 50px;
`;

export const Botao2 = styled.button`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: red;
  color: white;
  font-size: 19px;
  padding: 10px 20px;
  border: none;
  margin: 1%;
  margin-top: 9%;
  border-radius: 50px;
`;

export const Centralizar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`;

export const Input = styled.input`
  border: 2px solid #367aa7; /* Bordas */
  border-radius: 8px; /* Cantos arredondados */
  padding: 10px; /* Padding */
  width: 65%; /* Largura fixa para centralização */
  font-size: 16px; /* Tamanho da fonte */
  transition: border-color 0.3s, box-shadow 0.3s; /* Transições suaves */

  /* Centraliza os inputs */
  margin: 10px auto; /* Centraliza horizontalmente e adiciona margem superior/inferior */

  &:focus {
    border-color: #ff8c00; /* Cor da borda ao focar */
    box-shadow: 0 0 5px rgba(255, 140, 0, 0.5); /* Efeito de brilho */
    outline: none; /* Remove o contorno padrão */
  }

  &:hover {
    border-color: #ff8c00; /* Cor da borda ao passar o mouse */
  }
`;


export const Diva = styled.div`
  width: 80%;
`;

export const Dive = styled.div`
  width: 90%;
`;
