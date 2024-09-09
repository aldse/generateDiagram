import React, { useContext, useState } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLogo,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";
import {
  AiOutlineLeft,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { ThemeContext } from "../../main";
import { useNavigate } from "react-router-dom";
import LogoComponents from "../LogoComponents";
import { useAuth } from "../../context/authContext";
import BaseModalWrapper from "../ModalSettings/BaseModalWrapper";

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  
  const handleLogout = () => {
    console.log("Logout clicked");
    logout();
    navigate("/");
  };

  const secondaryLinksArray = [
    {
      label: "Settings",
      onClick: toggleModal, 
      icon: <AiOutlineSetting />,
    },
    {
      label: "Logout",
      onClick: handleLogout,
      icon: <MdLogout />,
    },
  ];

  return (
    <SSidebar $isOpen={sidebarOpen}>
      <SSidebarButton
        $isOpen={sidebarOpen}
        onClick={() => setSidebarOpen((p) => !p)}
      >
        <AiOutlineLeft />
      </SSidebarButton>
      <SLogo>
        <LogoComponents theme={theme} />
      </SLogo>

      <SDivider />
      {secondaryLinksArray.map(({ icon, label, onClick }) => (
        <SLinkContainer key={label}>
          <SLink
            to="#"
            style={!sidebarOpen ? { width: `fit-content` } : {}}
            onClick={onClick} 
          >
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          $isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>

      <BaseModalWrapper
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </SSidebar>
  );
};

export default Sidebar;
