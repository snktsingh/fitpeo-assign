import { Col, Row } from "antd";
import "./App.css";
import Sidebar from "./components/menu";
import Dashboard from "./components/dashboard";
import {
  DesktopContainer,
  LayoutContainer,
  MenuHeader,
  MobileContainer,
  SidebarContainer,
} from "./style";
import { MenuIcon } from "./constants/media";
import Header from "./components/header";

function App() {
  return (
    <LayoutContainer>
      <DesktopContainer>
        <Row>
          <SidebarContainer span={4}>
            <MenuHeader>
              <img src={MenuIcon} width="10%" style={{ marginRight: "15px" }} />
              <h2>Dashboard</h2>
            </MenuHeader>
            <Sidebar />
            {/* <ManagerCard>
            <div>
              <Avatar
                style={{ backgroundColor: "#87d068", marginRight: "10px" }}
                icon={<UserOutlined />}
              />
              <span>Envano</span>
            </div>
            <DownOutlined />
          </ManagerCard> */}
          </SidebarContainer>
          <Col span={20}>
            <Dashboard />
          </Col>
        </Row>
      </DesktopContainer>
      <MobileContainer>
        <Header />
        <Dashboard />
      </MobileContainer>
    </LayoutContainer>
  );
}

export default App;
