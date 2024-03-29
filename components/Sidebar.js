import "antd/dist/antd.css";
import { Menu, Layout, SubMenu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  InsuranceOutlined,
  EditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const Sidebar = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Link href="/">
          <div className="logo">
            <h1 style={{ color: "white" }}>HG Insurance </h1>
          </div>
        </Link>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[1]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link href="/Dashboard"> Dashboard </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<InsuranceOutlined />}>
            <Link href="/Insurance"> Insurance </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<CheckCircleOutlined />}>
            <Link href="/Activations"> Activations </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link href="/Customer"> Customer </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<EditOutlined />}>
            <Link href="/EditProfile"> Edit profile </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
