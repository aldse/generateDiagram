import styled from 'styled-components';
// Styled components with transient props
export const Label = styled.h3`
  font-family: "General Sans", sans-serif;  
  font-weight: 510;
  font-style: normal;
  color: black;
  font-size: ${(props) => (props.$language === 'pt' ? '48px' : props.$language === 'es' ? '50px' : '55px')}; 
  display: flex;
  align-items: center; 
  margin: 0;
`;

export const P = styled.p`
  font-family: "General Sans", sans-serif;
  color: #626262;
  font-size: ${(props) => (props.$language === 'pt' ? '26px' : props.$language === 'es' ? '28px' : '30px')}; 
  margin: 0;
`;

export const ImagePassword = styled.img`
  width: 10%;
`;

export const DivTogglePassword = styled.div`
  position: relative;
  width: 100%;
`;

export const ToggleIcon = styled.div`
  position: absolute;
  right: 10px; 
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  justify-content: end;
`;

export const A = styled.div`
  font-family: "General Sans", sans-serif;
  font-weight: 400;
  color: #626262;
  margin-top: ${({ $variant }) => ($variant === "A2" ? "20px" : "40px")};
  margin-bottom: 7px; 
  justify-content: "initial";
  display: ${({ $variant }) => ($variant === "A2" ? "flex" : "block")};
  font-size: ${({ $variant }) => ($variant === "A2" ? "18px" : "20px")};
`;

export const Div = styled.div`
  margin-top: 40px;
`;

export const Link = styled.p`
  font-family: "General Sans", sans-serif;
  color: #2D56ED;
  text-decoration: none;
  font-weight: 500;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  font-family: "General Sans", sans-serif;
  background-color: #2D56ED;
  color: white;
  font-size: 22px;
  padding: 17px ;
  width:100%;
  border: none;
  cursor: pointer;
  overflow: hidden; 
  border-radius: 5px;
  transition: color 0.3s, background-position 0.3s;

  background: linear-gradient(to right, #2D56ED 50%, #1C3DB9 50%);
  background-size: 200% 100%; 

  &:hover {
    background-position: -100% 0; 
    color: white; 
  }
  `;

export const Input = styled.input`
  font-family: "General Sans", sans-serif;
  width: 100%;
  height: 60px;
  margin: 0;
  border: 1px solid #DDDDDD; 
  border-radius: 5px; 
  padding: 0 8px; 
  box-sizing: border-box; 
`;