import React from 'react';
import Modal from './Modal';
import { DekstopModalContainer, Header } from './ModalPopup.styles';

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible){
        return null
    }
    
    return (<Modal onBackdropClick={onBackdropClick} >
        <DekstopModalContainer>
            <Header>Nome: </Header>
            <Header>Email:</Header>
            <Header>Cpf: </Header>
            <Header>Edv:</Header>
            <Header>CEP:</Header>
            <Header>Rua:</Header>
            <Header>Número:</Header>
            <Header>Senha:</Header>
        </DekstopModalContainer>
    </Modal>);
}

export default BaseModalWrapper

