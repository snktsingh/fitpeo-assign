import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import React from "react";
import { MenuContainer } from "./style";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Dashboard", "1", <AppstoreOutlined />),
  getItem("Products", "2", <AppstoreOutlined />, []),
  getItem("Customers", "3", <SettingOutlined />, []),
  getItem("Income", "4", <SettingOutlined />, []),
  getItem("Promote", "5", <SettingOutlined />, []),
  getItem("Help", "6", <SettingOutlined />, []),
];
export default function Sidebar() {
  return (
    <MenuContainer defaultSelectedKeys={["1"]} mode="inline" items={items} />
  );
}
