import styled from "styled-components";
import { theme } from "../../constants/theme";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Table } from "antd";

export const MainContainer = styled.div`
  padding: 1% 5%;
  background-color: ${theme.primary.background};
`;
export const CardTitle = styled.span`
  color: ${theme.text.subtitle};
  font-weight: 500;
  margin-bottom: 0px;
`;
export const CardValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const ValueContainer = styled.span`
  display: flex;
  flex-direction: column;
`;
export const Increase = styled(ArrowUpOutlined)`
  color: green;
  font-size: 12px;
  font-weight: 600;
`;
export const GrowData = styled.span`
  font-size: 0.9rem;
  color: green;
  font-weight: 700;
`;
export const LineData = styled.span`
  display: flex;
  align-items: center;
`;
export const DataTable = styled(Table)`
  overflow-x: scroll;
`;
