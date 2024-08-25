import styled from 'styled-components';

export const Label = styled.h3`
  font-family: "General Sans", sans-serif;  
  font-weight: 510;
  font-style: normal;
  color: black;
  font-size: 55px; 
  display: flex;
  align-items: center; 
  margin: 0;
`;


export const P = styled.p`
font-family: "General Sans", sans-serif;
color: #626262;
font-size: 30px; 
margin: 0;
`;


export const A = styled.p`
  font-family: "General Sans", sans-serif;
  font-weight: ${({ $variant }) => ($variant === 'A2' ? 'normal' : 400)};
  color: #626262;
  font-size: ${({ $variant }) => ($variant === 'A2' ? '18px' : '20px')};
  margin-top: ${({ $variant }) => ($variant === 'A2' ? '40px' : '20px')};
  margin-bottom: ${({ $variant }) => ($variant === 'A2' ? '0' : '7px')};
  display: ${({ $variant }) => ($variant === 'A2' ? 'flex' : 'block')};
  justify-content: ${({ $variant }) => ($variant === 'A2' ? 'center' : 'flex-start')};
`;

// export const A = styled.p`
//   font-family: "General Sans", sans-serif;
//   font-weight: 400;
//   color: #626262;
//   font-size: 20px;
//   margin-top: 20px; 
//   margin-bottom: 7px; 
// `;

// export const A2 = styled.p`
//   font-family: "General Sans", sans-serif;
//   color: #626262;
//   display: flex;
//   justify-content: center;
//   font-size: 18px;
//   margin-top: 40px;
// `;

export const Div = styled.div`
  margin-top: 80px;
`;

export const Link = styled.a`
  font-family: "General Sans", sans-serif;
  color: #2D56ED;
  text-decoration: none;
  font-weight: 500;
  margin: 0 5px; /* Remove o espaçamento extra nas laterais */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Botao = styled.button`
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

export const Image = styled.image`

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
