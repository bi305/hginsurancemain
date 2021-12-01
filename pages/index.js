import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CloudOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function Home() {
  const { Content } = Layout;
  return (
    <Layout>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          content
        </div>
      </Content>
    </Layout>
  );
}
