import styled from 'styled-components';

const ModalContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-itens: center;
    position: relative;
`;

export const DekstopModalContainer = styled(ModalContainer)`
    border-radius: 7px;
    box-shadow: 0 0 32px rgba(0,0,0,0,5);
`;
