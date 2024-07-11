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
            <Header> O modal parceiro</Header>
        </DekstopModalContainer>
    </Modal>);
}

export default BaseModalWrapper