import styled from 'styled-components';

const ModalContainer = styled.div`
    background-color: #367aa7;
    display: flex;
    flex-direction: column;
    align-itens: center;
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
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    color: #367aa7;
    font-size:22px;
    line-heigth: 3em;
    font-weigth: 300;
    margin: 3px 0 6px;
    display: flex;
    align-items: center;
`;

export const Titulo = styled.h3`
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    color: #367aa7;
    font-size:30px;
    line-heigth: 3em;
    font-weigth: 300;
    margin: 40px 0 30px;
    display: flex;
    align-items: center;
    justify-content: center; 
  
`;

export const VAMBORA = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 20%;
    height: 100%;
    padding: 1rem;
    position: relative;
`;

export const Botao = styled.button`
    background-color: #367aa7;
    color: white;
    font-size: 23px;
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
    background-color: orange;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    margin: 1%;
    margin-top: 9%;
    border-radius: 50px ;
`;

export const Botao2 = styled.button`
    background-color: red;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    margin: 1%;
    margin-top: 9%;
    border-radius: 50px ;

`;

export const Centralizar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
`;