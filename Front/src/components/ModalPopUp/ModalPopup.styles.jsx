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
  background: rgba(0, 0, 0, 0.1);
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
`;

export const VAMBORA = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 22%;
  height: 100%;
  padding: 1.5rem;
  position: relative;
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
  border-color: #367aa7;
  border: 1;
  margin-left: 2%
`;

export const Diva = styled.div`
 width: 20%;
`;

export const Dive = styled.div`
 width: 90%;
`;
