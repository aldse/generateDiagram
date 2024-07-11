import styled from 'styled-components';

const ModalContainer = styled.div`
    background-color: #367aa7;
    display: flex;
    flex-direction: column;
    align-itens: center;
    position: relative;
`;

export const DekstopModalContainer = styled(ModalContainer)`
    border-radius: 7px;
    box-shadow: 0 0 32px rgba(0,0,0,0,5);
    padding: 25px;
    width: 350px;
    font-size:26px;
`;

export const Header = styled.h3`
    font-family: "Kantumruy Pro", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: white;
    font-size:20px;
    line-heigth: 1em;
    font-weigth: 300;
    margin: 3px 0 6px;
`;
