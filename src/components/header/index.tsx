import {
  ElementCOntainer,
  HeaderContainer,
  MenuDrawer,
  SearchInput,
  Title,
} from "./style";
import { Hand, MobileMenu } from "../../constants/media";
import { SearchOutlined } from "@ant-design/icons";
import { DesktopContainer, MobileContainer } from "../../style";
import { Button } from "antd";
import { useState } from "react";
import Sidebar from "../menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DesktopContainer>
        <HeaderContainer>
          <ElementCOntainer>
            <Title>
              <h2>Hello Shahrukh</h2>&nbsp;&nbsp;
              <img src={Hand} width="5%" height="30%" />,
            </Title>
            <SearchInput
              size="small"
              placeholder="Search..."
              prefix={<SearchOutlined />}
            />
          </ElementCOntainer>
        </HeaderContainer>
      </DesktopContainer>
      <MobileContainer>
        <div
          style={{
            padding: "2% 4%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <img src={MobileMenu} width="12%" onClick={showDrawer} />
          <h3>Dashboard</h3>
          <Button>
            <SearchOutlined />
          </Button>
        </div>

        <MenuDrawer
          width="80%"
          title="Dashboard"
          placement="left"
          closable={false}
          onClose={onClose}
          open={open}
        >
          <Sidebar />
        </MenuDrawer>
      </MobileContainer>
    </div>
  );
}
