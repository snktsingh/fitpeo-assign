import { Drawer, Input } from "antd";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding-bottom: 2%;
`;
export const Title = styled.span`
  display: flex;
  align-items: center;
`;
export const ElementCOntainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SearchInput = styled(Input)`
  height: 5vh;
  border-radius: 10px;
  width: 30%;
`;
export const MenuDrawer = styled(Drawer)`
  padding: 0px;
`;
