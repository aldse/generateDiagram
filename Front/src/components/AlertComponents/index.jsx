import React from 'react';
import styles from './styles.module.scss';

const Alert = ({ type, title, description, onRemove, index, isExiting }) => {
  React.useEffect(() => {
    if (isExiting) {
      const exitTimer = setTimeout(() => onRemove(index), 500);
      return () => clearTimeout(exitTimer);
    }
  }, [isExiting, onRemove, index]);

  const renderIcon = () => {
    switch (type) {
      case 'Senha Incorreta':
      case 'Informações inválidas':
      case 'Usuário ou senha incorretos':
        return (
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        );
      case 'Usuário cadastrado com sucesso':
        return (
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        );
      case 'Por favor, insira um nome completo válido (nome e sobrenome).':
      case 'Por favor, insira um email válido.':
      case 'Insira um número válido':
      case 'As senhas não foram inseridas iguais!':
      case 'Senha menor que 8 digitos, NÃO!':
      case 'CEP não encontrado. Verifique o CEP informado.':
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

  return (
    <div className={`${styles.alert} ${styles[`alert--${type}`]} ${isExiting ? styles.exiting : styles.entering}`}>
      <div className={styles['alert-icon']}>
        {renderIcon()}
      </div>
      <div className={styles['alert-content']}>
        <div className={styles['alert-content-title']}>
          {title}
        </div>
        <div className={styles['alert-content-description']}>
          {description}
        </div>
      </div>
    </div>
  );
};

// Component for managing Alert list
const AlertComponents = () => {
  const [alerts, setAlerts] = React.useState([]);
  const [nextId, setNextId] = React.useState(0);

  React.useEffect(() => {
    return () => setAlerts([]);
  }, []);

  const addAlert = (type) => {
    const id = nextId;
    setAlerts((prevAlerts) => [
      { id, type, title: type.charAt(0).toUpperCase() + type.slice(1), description: ` ${type} `, isExiting: false },
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
    }, 1500 ); 
  };

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
      <div className="relative font-semibold text-2xl pb-4 border-b border-gray-300">
        {/* Error Alerts */}
        <button onClick={() => addAlert('Senha Incorreta')} className="p-2 bg-red-500 text-white rounded">Senha Incorreta</button>
        <button onClick={() => addAlert('Informações inválidas')} className="p-2 bg-red-500 text-white rounded">Informações inválidas</button>
        <button onClick={() => addAlert('Usuário ou senha incorretos')} className="p-2 bg-red-500 text-white rounded">Usuário ou senha incorretos</button>
        {/* Success Alert */}
        <button onClick={() => addAlert('Usuário cadastrado com sucesso')} className="p-2 bg-green-500 text-white rounded">Usuário cadastrado com sucesso</button>
        {/* Warning Alerts */}
        <button onClick={() => addAlert('Por favor, insira um nome completo válido (nome e sobrenome).')} className="p-2 bg-yellow-500 text-white rounded">Insira um nome completo válido</button>
        <button onClick={() => addAlert('Por favor, insira um email válido.')} className="p-2 bg-yellow-500 text-white rounded">Insira um email válido</button>
        <button onClick={() => addAlert('Insira um número válido')} className="p-2 bg-yellow-500 text-white rounded">Insira um número válido</button>
        <button onClick={() => addAlert('As senhas não foram inseridas iguais!')} className="p-2 bg-yellow-500 text-white rounded">Senhas não iguais</button>
        <button onClick={() => addAlert('Senha menor que 8 digitos, NÃO!')} className="p-2 bg-yellow-500 text-white rounded">Senha menor que 8 dígitos</button>
        <button onClick={() => addAlert('CEP não encontrado. Verifique o CEP informado.')} className="p-2 bg-yellow-500 text-white rounded">CEP não encontrado</button>
        {/* Info Alert */}
        <button onClick={() => addAlert('info' )} className="p-2 bg-blue-500 text-white rounded">Add Info Alert</button>
      </div>
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
    </div>
  );
};

export default AlertComponents;
