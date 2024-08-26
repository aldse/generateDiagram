import styles from './styles.module.scss';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Alert = ({ type, title, description, onRemove, index, isExiting }) => {
  React.useEffect(() => {
    if (isExiting) {
      const exitTimer = setTimeout(() => onRemove(index), 1000);
      return () => clearTimeout(exitTimer);
    }
  }, [isExiting, onRemove, index]);

  const renderIcon = () => {
    switch (type) {
      case 'Senha Incorreta':
      case 'Informações inválidas':
        return (
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        );
      case 'Usuário cadastrado com sucesso':
      case 'Feedback enviado com sucesso':
        return (
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        );
      case 'Por favor, insira um nome de usuário válido.':
      case 'Por favor, insira um email válido.':
      case 'Insira um número válido':
      case 'Insira o CPF':
      case 'Insira o EDV':
      case 'As senhas não foram inseridas iguais!':
      case 'Senha menor que 8 digitos, NÃO!':
      case 'CEP inválido':
      case 'Opinião sobre a página não inserida':
      case 'Categoria do Feedback não inserida':
      case 'Feedback não inserido':
        return (
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
          </svg>
        );
      case 'info':
        return (
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
            <path fill="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  const alertTypeClass = {
    'Senha Incorreta': 'error',
    'Informações inválidas': 'error',
    'Usuário cadastrado com sucesso': 'success',
    'Por favor, insira um nome de usuário válido.': 'warning',
    'Por favor, insira um email válido.': 'warning',
    'Insira um número válido': 'warning',
    'Insira o CPF': 'warning',
    'Insira o EDV': 'warning',
    'As senhas não foram inseridas iguais!': 'warning',
    'Senha menor que 8 digitos, NÃO!': 'warning',
    'CEP inválido': 'warning',
    'info': 'info',
    'Opinião sobre a página não inserida': 'warning',
    'Categoria do Feedback não inserida': 'warning',  
    'Feedback não inserido': 'warning',
    'Feedback enviado com sucesso': 'success',
  }[type] || 'info';

  return (
    <div className={`${styles.alert} ${styles[`alert--${alertTypeClass}`]} ${isExiting ? styles.exiting : styles.entering}`}>
      <div className={styles['alert-icon']}>
        {renderIcon()}
      </div>
      <div className={styles['alert-content']}>
        <div className={styles['alert-content-title']} style={{ color: alertTypeClass === 'error' ? 'red' : alertTypeClass === 'success' ? 'green' : 'black' }}>
          {title}
        </div>
        <div className={styles['alert-content-description']} style={{ color: alertTypeClass === 'error' ? 'red' : alertTypeClass === 'success' ? 'green' : 'black' }}>
          {description}
        </div>
      </div>
    </div>
  );
};

const AlertComponents = forwardRef((_, ref) => {
  const [alerts, setAlerts] = useState([]);
  const [nextId, setNextId] = useState(0);

  useImperativeHandle(ref, () => ({
    addAlert(type, title, description) {
      const id = nextId;
      setAlerts((prevAlerts) => [
        { id, type, title, description, isExiting: false },
        ...prevAlerts
      ]);
      setNextId(id + 1);

      setTimeout(() => {
        setAlerts((prevAlerts) => {
          return prevAlerts.map(alert =>
            alert.id === id ? { ...alert, isExiting: true } : alert
          );
        });
        setTimeout(() => {
          setAlerts((prevAlerts) => prevAlerts.filter(alert => alert.id !== id));
        }, 500);
      }, 1500);
    }
  }));

  const handleRemoveAlert = (id) => {
    setAlerts((prevAlerts) => {
      return prevAlerts.map(alert =>
        alert.id === id ? { ...alert, isExiting: true } : alert
      );
    });
    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.filter(alert => alert.id !== id));
    }, 500);
  };

  return (
    <div className={styles['alert-container']}>
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          type={alert.type}
          title={alert.title}
          description={alert.description}
          onRemove={handleRemoveAlert}
          index={alert.id}
          isExiting={alert.isExiting}
        />
      ))}
    </div>
  );
});

export default AlertComponents;
