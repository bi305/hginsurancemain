import "antd/dist/antd.css";
import { Layout } from "antd";
import { Card, Col, Row } from "antd";

const Dashboard = () => {
  const { Content } = Layout;
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Insurance Active" bordered={false}>
              0
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Customers" bordered={false}>
              0
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Insurance Expired" bordered={false}>
              0
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default Dashboard;
