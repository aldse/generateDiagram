import styled from 'styled-components';
import backgroundModal from "../../assets/back7.png";

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
  color: white;
  font-size: 20px;
  line-height: 1.5em; 
  margin: 0px 0 9px;
  display: flex;
  align-items: center;
  word-break: break-word;
`;

export const Header2 = styled.h3`
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 500;
  color: white;
  font-size: 20px;
  line-height: 0.1em; 
  margin: 0px 0 2px;
  display: flex;
  align-items: center;
  word-break: break-word;
`;

export const Letras = styled.h3`
  min-width:115px;
`;

export const Titulo = styled.h3`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
  color: white;
  font-size: 40px;
  line-height: 3em;
  margin: 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: center; 
  word-break: break-word; 
`;

export const VAMBORA = styled.div`
  display: flex;
  flex-direction: column;
 background-image: url(${backgroundModal});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 22%;
  height: 100%;
  padding: 1.5rem;
  position: relative;
  overflow: auto; 
`;

export const Botao = styled.button`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: #2649EC;
  color: white;
  font-size: 25px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  position: absolute; 
  overflow: hidden; 
  border-radius: 25% 10%;
  transition: color 0.3s, background-position 0.3s;

  background: linear-gradient(to right, #4146EC 50%, #5D6FF4 50%);
  background-size: 200% 100%; 

  &:hover {
    background-position: -100% 0; 
    color: #fff; 
  }
`;

export const Divi = styled.div`
  display: flex;
  justify-content: center;
  aling-content: end;
  margin-top: 37.5%;
`;

export const Divii = styled.div`
  display: flex;
  justify-content: center;
  aling-content: end;
  margin-top: 72%;
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
  width: 25%;
  heigth:10%;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
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
  width: 25%;
  heigth:10%;
  margin-top: 9%;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Botao3 = styled.button`
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
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Botao4 = styled.button`
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
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;


export const Centralizar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`;

export const Input = styled.input`
  border: 2px solid #367aa7; 
  border-radius: 8px;
  padding: 10px; 
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s; 

  margin: 10px auto; 

  &:focus {
    border-color: #ff8c00; 
    box-shadow: 0 0 5px rgba(255, 140, 0, 0.5); 
    outline: none;
  }

  &:hover {
    border-color: #ff8c00; 
  }
`;


export const Diva = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`;

export const Dive = styled.div`
  width: 90%;
`;

export const Negr = styled.h1`
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 700;
  color: white;
  font-size: 20px;
  min-width:100px;
  // display: flex;
  // justify-content: center;
  line-height: 0.05em; 
  margin: 0px 0 1px;
`;
