import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Dropdown = ({ options, onSelect }) => {
  const [open, setOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(() => {
    const savedOption = localStorage.getItem('selectedLanguage');
    return savedOption ? JSON.parse(savedOption) : options[0];
  });

  useEffect(() => {
    const savedOption = localStorage.getItem('selectedLanguage');
    if (savedOption) {
      setSelectedOption(JSON.parse(savedOption));
    }
  }, [options]);

  const handleDropdownToggle = () => setOpen(!open);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    localStorage.setItem('selectedLanguage', JSON.stringify(option));
    if (onSelect) onSelect(option);
    setOpen(false);
  };

  return (
    <div className={styles.dropdown__container}>
      <button className={styles.dropdown__button} onClick={handleDropdownToggle}>
        <img src={selectedOption.image} alt={selectedOption.name} className={styles.dropdown__icon} />
      </button>
      <div className={open ? styles.dropdown__menu__active : styles.dropdown__menu__deactive}>
        {options.map((option) => (
          <div key={option.name} className={styles.dropdown__option} onClick={() => handleOptionSelect(option)}>
            <img src={option.image} alt={option.name} className={styles.dropdown__option__icon} />
            <span className={styles.dropdown__option__text}>{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;