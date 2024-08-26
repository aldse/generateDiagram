import styled from "styled-components";
import backgroundModal from "../../assets/backofc.png";
import perfil from "../../assets/menu.png";

const ModalContainer = styled.div`
  background-color: #367aa7;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DekstopModalContainer = styled(ModalContainer)`
  z-index: 9999;
  width: 100vw;
  height: 105vh;
  position: absolute;
  top: -5%;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
`;

const BaseHeader = styled.div`
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
  max-width: ${(props) => props.$maxWidth || "85%"};
  box-sizing: border-box;
`;

export const Header = (props) => <BaseHeader $maxWidth="85%" {...props} />;

export const Header2 = (props) => <BaseHeader $maxWidth="85%" {...props} />;


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
`;

export const Titulo = (props) => <BaseTitulo {...props} />;

export const Titulo2 = (props) => (
  <BaseTitulo $margin="-80px 0 0" $marginLeft="-210px" $marginBotton="200%"{...props} />
);


export const VAMBORA = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundModal});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 22%;
  height: 100%;
  padding: 1.5rem;
  position: relative;
  overflow: auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
`;

export const Divi = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
  margin-top: ${({ $variant }) => ($variant === "Divi1" ? "60%" : "60%")};
`;

export const Botao1 = styled.button`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: transparent;
  color: #06e229;
  font-size: 19px;
  padding: 10px 20px;
  border: 2px solid #06e229;
  margin-top: -40%;
  border-radius: 50px;
  cursor: pointer;
  width: 200px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

const BaseBotao = styled.button`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.color || "red"};
  font-size: 19px;
  padding: 10px 20px;
  border: 2px solid ${(props) => props.borderColor || "red"};
  border-radius: 50px;
  cursor: pointer;
  width: 200px;
  margin: ${(props) => props.margin || "1%"};
  margin-top: ${(props) => props.marginTop || "5%"};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const Botao2 = styled(BaseBotao)`
  color: red;
  border-color: red;
`;

export const Botao3 = styled(BaseBotao)`
  color: orange;
  border-color: orange;
  margin-top: -30%;
`;

export const Botao4 = styled(BaseBotao)`
  color: red;
  border-color: red;
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

  &:hover {
    background-position: -100% 0;
    color: #fff;
  }
`;

export const DiminuirTam = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 500;
  border: none;
  border-radius: 50px;
  padding: 8px;
  font-size: 17px;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: 100%;
  height: 40px;
  color: #102482;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;

  &:focus {
    outline: none;
  }
`;

const BaseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const Diva = styled(BaseContainer)`
  align-items: center;
  margin-top: 12%;
  margin-bottom: -1%;
`;


export const Dive = styled(BaseContainer)`
  margin-left: 45px;
  margin-top: 12%;
`;

const BaseLabel = styled.div`
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
  top: ${props => props.$top || 'auto'};
  left: ${props => props.$left || '0px'};
  transform: translateY(${props => props.$transformY || '0%'});
  height: ${props => props.$height || '100%'};
  width: ${props => props.$width || '30%'};
  margin-left: ${props => props.$marginLeft || '0'};
`;


export const Negr = styled(BaseLabel)`
  top: 50%;
  transform: translateY(-50%);
`;

export const Letras = styled(BaseLabel)`
  top: auto;
  height: 48px;
  width: 30.2%;
  margin-left: -2px;
  transform: translateY(0%);
`;


const BaseContent = styled.div`
  font-size: 17px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  display: inline-block;
  max-width: calc(100% - 120px);
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  margin-left: ${props => props.marginLeft || '0px'};
`;

export const Content = styled(BaseContent)`
  margin-left: 100px;
`;

export const Content2 = styled(BaseContent)`
  margin-left: 95px;
`;
