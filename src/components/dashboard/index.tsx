import { Card, Col, Input, Row, Select, Space, Table, Tag } from "antd";
import {
  CardTitle,
  CardValue,
  DataTable,
  GrowData,
  Increase,
  LineData,
  MainContainer,
  ValueContainer,
} from "./style";
import Header from "../header";
import {
  CardIcon,
  CardIcon2,
  CardIcon3,
  CardIcon4,
  Hand,
} from "../../constants/media";
import { Chart } from "react-google-charts";
import { SearchOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { DesktopContainer, MobileContainer } from "../../style";
import { Title } from "../header/style";

const statdata = [
  {
    icon: CardIcon,
    title: "Earning",
    value: "$564K",
    change: "35.65%",
  },
  {
    icon: CardIcon2,
    title: "Orders",
    value: "$453",
    change: "35.65%",
  },
  {
    icon: CardIcon3,
    title: "Balance",
    value: "$45",
    change: "35.65%",
  },
  {
    icon: CardIcon4,
    title: "Total Sales",
    value: "$678",
    change: "35.65%",
  },
];

const gridStyle: React.CSSProperties = {
  padding: "1px",
};

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  pieHole: 0.3,
  is3D: false,
};

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  sales: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Stock",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Price",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Total Sales",
    dataIndex: "sales",
    key: "sales",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const tabledata: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "$4543",
    tags: ["best", "best seller"],
    sales: "34",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "$4343",
    tags: ["verified", "top"],
    sales: "23",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "$443",
    tags: ["cool", "most bought "],
    sales: "34",
  },
];

export default function Dashboard() {
  return (
    <div>
      <DesktopContainer>
        <MainContainer>
          <Header />
          <Row gutter={24}>
            {statdata.map((item, index) => {
              return (
                <Col span={6} key={index}>
                  <Card bordered={false} style={gridStyle}>
                    <Row>
                      <Col span={8}>
                        <img src={item.icon} width="100%" />
                      </Col>
                      <Col span={1}></Col>
                      <Col span={15}>
                        <ValueContainer>
                          <CardTitle>{item.title}</CardTitle>
                          <CardValue>{item.value}</CardValue>
                          <LineData>
                            <Increase />
                            <GrowData>{item.change}</GrowData>this month
                          </LineData>
                        </ValueContainer>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <br />
          <br />
          <Row>
            <Col span={15}>
              <Card>
                <Space
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Overview</h3>
                  <Select
                    defaultValue="quaterly"
                    style={{ width: 120 }}
                    options={[{ value: "quaterly", label: "Quaterly" }]}
                  />
                </Space>
                <Chart
                  chartType="Bar"
                  data={[
                    ["Age", "Weight"],
                    [4, 3],
                    [6, 5.5],
                    [6, 12],
                    [4, 2],
                    [8, 12],
                    [4, 5.5],
                    [8, 4],
                  ]}
                  width="100%"
                  height="300px"
                  legendToggle
                />
              </Card>
            </Col>
            <Col span={1}></Col>
            <Col span={8}>
              <Card>
                <h3>Customers</h3>
                <Chart
                  chartType="PieChart"
                  width="100%"
                  height="300px"
                  data={data}
                  options={options}
                />
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <Card>
            <Space style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Products Sell</h3>
              <Space size={30}>
                <Input placeholder="Search..." prefix={<SearchOutlined />} />
                <Select
                  defaultValue="quaterly"
                  style={{ width: 120 }}
                  options={[
                    { value: "last 30 days", label: "Last 30 days" },
                    { value: "last 20 days", label: "Last 20 days" },
                    { value: "last 10 days", label: "Last 10 days" },
                  ]}
                />
              </Space>
            </Space>
            <br />
            <Table columns={columns} dataSource={tabledata} />;
          </Card>
        </MainContainer>
      </DesktopContainer>
      <MobileContainer>
        <MainContainer>
          <Title>
            <h3>Hello Shahrukh</h3>&nbsp;&nbsp;
            <img src={Hand} width="5%" height="30%" />,
          </Title>
          <Row>
            {statdata.map((item, index) => {
              return (
                <Col span={24} key={index}>
                  <Card bordered={false} style={gridStyle}>
                    <Row>
                      <Col span={8}>
                        <img src={item.icon} width="100%" />
                      </Col>
                      <Col span={1}></Col>
                      <Col span={15}>
                        <ValueContainer>
                          <CardTitle>{item.title}</CardTitle>
                          <CardValue>{item.value}</CardValue>
                          <LineData>
                            <Increase />
                            <GrowData>{item.change}</GrowData>this month
                          </LineData>
                        </ValueContainer>
                      </Col>
                    </Row>
                  </Card>
                  <br />
                </Col>
              );
            })}
          </Row>
          <Card>
            <Space style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Overview</h3>
              <Select
                defaultValue="quaterly"
                style={{ width: 120 }}
                options={[{ value: "quaterly", label: "Quaterly" }]}
              />
            </Space>
            <Chart
              chartType="Bar"
              data={[
                ["Age", "Weight"],
                [4, 3],
                [6, 5.5],
                [6, 12],
                [4, 2],
                [8, 12],
                [4, 5.5],
                [8, 4],
              ]}
              width="100%"
              height="300px"
              legendToggle
            />
          </Card>
          <br />
          <Card>
            <h3>Customers</h3>
            <Chart
              chartType="PieChart"
              width="100%"
              height="300px"
              data={data}
              options={options}
            />
          </Card>
          <br />
          <Card>
            <Space style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Products Sell</h3>
              <Space size={30}>
                <Input placeholder="Search..." prefix={<SearchOutlined />} />
                <Select
                  defaultValue="quaterly"
                  style={{ width: 120 }}
                  options={[
                    { value: "last 30 days", label: "Last 30 days" },
                    { value: "last 20 days", label: "Last 20 days" },
                    { value: "last 10 days", label: "Last 10 days" },
                  ]}
                />
              </Space>
            </Space>
            <br />
            <DataTable columns={columns} dataSource={tabledata} />
            <br />
          </Card>
        </MainContainer>
      </MobileContainer>
    </div>
  );
}
