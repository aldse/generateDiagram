import styled from "styled-components";
import backgroundModal from "../../assets/red.png";
import perfil from "../../assets/menu.png";

export const DekstopModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  width: 100vw;
  height: 105vh;
  position: absolute;
  top: -5%;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  align-items: flex-end;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 100vh;
    top: 0;
  }
`;

export const BaseHeader = styled.div`
  background-color: white;
  border-radius: 50px;
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 500;
  color: #102482;
  font-size: 20px;
  margin: 8px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  position: relative;
  height: 48px;
  max-width: 85%;
  box-sizing: border-box;
  z-index: 1000;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 12px;
    margin: 4px;
  }
`;

const BaseTitulo = styled.h3`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 40px;
  line-height: 3em;
  margin: ${(props) => props.$margin || "-5% 0 0"};
  margin-left: ${(props) => props.$marginLeft || "-248px"};
  word-break: break-word;
  z-index: 1000;
  @media (max-width: 768px) {
    font-size: 24px;
    margin: -2% 0 0;
    margin-left: -150px;
  }
`;

export const Titulo = (props) => <BaseTitulo {...props} />;

export const Titulo2 = (props) => (
  <BaseTitulo $margin="-80px 0 0" $marginLeft="-210px" {...props} />
);

export const VAMBORA = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #102482;
  width: 20%;
  height: 100%;
  padding: 1.5rem;
  position: relative;
  overflow: auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-left: 25px solid #102482;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Imagem2Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: -90px;
  height: 800px; 
  z-index: 0; 
`;

export const Imagem2 = styled.div`
  background-image: url(${backgroundModal});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const Imagem = styled.div`
  background-image: url(${perfil});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 55px;
  height: 55px;
  position: absolute;
  top: 68px;
  right: 25px;
  z-index: 1000;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: 50px;
    right: 15px;
  }
`;

export const Divi = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60%;
  z-index: 1000;
  @media (max-width: 768px) {
    margin-top: 40%;
  }
`;

const BaseBotao = styled.button`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  color: ${(props) => props.color || "red"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: 19px;
  padding: 10px 20px;
  margin: 3%;
  border: 2px solid ${(props) => props.borderColor || "red"};
  border-radius: 50px;
  cursor: pointer;
  width: 200px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  z-index: 1000;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    width: 150px;
    padding: 8px 16px;
  }
`;

export const BotaoGreen = styled(BaseBotao)`
  color: #06e229;
  border-color: #06e229;
  margin-top: -40%;
  z-index: 1000;
`;

export const BotaoRed = styled(BaseBotao)`
  color: red;
  border-color: red;
  z-index: 1000;
`;

export const BotaoOrange = styled(BaseBotao)`
  color: orange;
  border-color: orange;
  margin-top: -40%;
  z-index: 1000;
`;

export const Botao = styled.button`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: #2649ec;
  color: white;
  width: 80px;
  font-size: 25px;
  padding: 10px 20px;
  border: none;
  margin: 1%;
  margin-top: 20%;
  cursor: pointer;
  border-radius: 25% 10%;
  transition: color 0.3s, background-position 0.3s;
  background: linear-gradient(to right, #4146ec 50%, #5d6ff4 50%);
  background-size: 200% 100%;
  z-index: 1000;
  &:hover {
    background-position: -100% 0;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 60px;
    font-size: 20px;
    padding: 8px 16px;
    margin-top: 10%;
  }
`;

export const DiminuirTam = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const BaseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  margin-top: 12%;
  margin-left: 15%;
  margin-bottom: -1%;
  z-index: 1000;
  @media (max-width: 768px) {
    margin-left: 5%;
    margin-top: 8%;
  }
`;

export const BaseLabel = styled.div`
  background-color: #102482;
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  font-size: 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30%;
  box-sizing: border-box;
  padding: 0 10px;
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 25%;
  }
`;

export const BaseContent = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 15px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  display: inline-block;
  max-width: calc(100% - 40px);
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
  margin-left: 30%;
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 25%;
  }
`;

export const Input = styled.input`
  font-weight: 500;
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 15px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  border: none;
  border-radius: 50px;
  padding: 0px;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: calc(100% - 20px);
  height: 40px;
  color: #102482;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  z-index: 1000;
  
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 35px;
  }
`;
