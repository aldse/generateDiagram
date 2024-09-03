import styled from 'styled-components';

export const Label = styled.h3`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
  color: white;
  font-size: 30px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center; 
  word-break: break-word; 
  padding-bottom: 20px;
`;

export const Botao = styled.button`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: red;
  color: black;
  font-size: 25px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  overflow: hidden; 
  margin-left: -3%;
  border-radius: 25% 10%;
  transition: color 0.3s, background-position 0.3s;

  background: linear-gradient(to right, white 50%, red 50%);
  background-size: 200% 100%; 

  &:hover {
    background-position: -100% 0; 
    color: #fff; 
  }
`;

export const Botao1 = styled.button`
font-family: "Alegreya Sans", sans-serif;
font-weight: 500;
font-style: normal;
background-color: orange;
color: black;
font-size: 25px;
padding: 10px 15px;
border: none;
cursor: pointer;
margin-left: 5%;
overflow: hidden; 
border-radius: 25% 10%;
transition: color 0.3s, background-position 0.3s;

background: linear-gradient(to right, white 50%, orange  50%);
background-size: 200% 100%; 

&:hover {
  background-position: -100% 0; 
  color: #fff; 
}
`;

export const Dive = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;