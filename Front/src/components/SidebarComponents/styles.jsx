import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";

export const SSidebar = styled.div`
    width: ${({ $isOpen }) => (!$isOpen ? `100px` : (v.sidebarWidth - `5px`))};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};
    z-index: 20000;
    position: fixed; 
    right: 0;
    user-select: none; 
`;

export const SSidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    left: ${({ $isOpen }) => ($isOpen ? `-16px` : `-40px`)}; 
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ $isOpen }) => (!$isOpen ? `rotate(360deg)` : `initial`)};
    user-select: none; 
    pointer-events: auto; 
`;

export const SLogo = styled.div`
    width: 52px;
    cursor: pointer;
    margin-bottom: ${v.lgSpacing};
    user-select: none; 

    img {
        max-width: 100%;
        height: auto;
    }
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
    background: ${({ theme, $isActive }) => (!$isActive ? `transparent` : theme.bg3)};
    border-radius: ${v.borderRadius};
    margin: 8px 0;
    user-select: none; 
    
    &:hover {
        background: transparent;
        box-shadow: none; 
    }

    &:active {
        background: transparent;
        box-shadow: none; 
    }
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
    user-select: none; 
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;

    svg {
        font-size: 25px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

export const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    user-select: none; 
`;

export const SThemeLabel = styled.span`
    display: block;
    flex: 1;
`;

export const SThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, $isActive }) => (!$isActive ? theme.bg3 : theme.primary)};
    position: relative;
    user-select: none;
`;

export const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    pointer-events: none; 
`;