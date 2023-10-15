import styled from "styled-components";
import { theme } from "./constants/theme";
import { Col } from "antd";
export const LayoutContainer = styled.div`
  height: 100%;
`;
export const SidebarContainer = styled(Col)`
  background-color: ${theme.primary.main};
  display: flex;
  flex-direction: column;
`;
export const MenuHeader = styled.span`
  color: ${theme.common.white};
  display: flex;
  margin: 25px 25px 15px 25px;
  justify-content: flex-start;
  align-items: center;
`;
export const ManagerCard = styled.div`
  background-color: ${theme.primary.background};
  opacity: 0.6;
  margin: 35vh 2vh 0vh 2vh;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;

export const DesktopContainer = styled.div`
  display: block;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const MobileContainer = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
