import "antd/dist/antd.css";
import { Layout } from "antd";

const Customer = () => {
  const { Content } = Layout;
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        Customer
      </div>
    </Content>
  );
};

export default Customer;