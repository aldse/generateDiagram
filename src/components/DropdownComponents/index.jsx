import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  `;
  
  const DropdownMenu = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 140px;
  max-height: 200px;
  overflow-y: auto;
  `;
  
  const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const OptionImage = styled.img`
  width: 30px;
  min-width: 30px;
  max-width: 30px;

  height: 30px;
  min-height: 30px;
  max-height: 30px;
  margin-right: 8px;
`;



const OptionText = styled.span`
  font-size: 14px;
  color: black;
  font-family: "General Sans", sans-serif;  
  font-weight: 510;
  font-style: normal;
`;

const DropdownWithImages = ({ options, onSelect }) => {
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
    <DropdownContainer>
      <DropdownButton onClick={handleDropdownToggle}>
        <img src={selectedOption.image} alt={selectedOption.name} style={{ width: 50, height: 50 }} />
      </DropdownButton>
      <DropdownMenu open={open}>
        {options.map((option) => (
          <Option key={option.name} onClick={() => handleOptionSelect(option)}>
            <OptionImage src={option.image} alt={option.name} />
            <OptionText>{option.name}</OptionText>
          </Option>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default DropdownWithImages;
