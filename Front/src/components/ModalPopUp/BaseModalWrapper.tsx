import React from 'react';
import Modal from './Modal';

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible){
        return null
    }
    
    return (<Modal onBackdropClick={onBackdropClick} />);
}

export default BaseModalWrapper