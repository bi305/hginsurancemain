import "antd/dist/antd.css";
import { Layout, Row, Col, Card, Form, Input, Button, Checkbox } from "antd";

const Insurance = () => {
  const { Content } = Layout;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: "100vh" }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Create Insurances" bordered={false}>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>

                <Form.Item label="Type" name="type">
                  <Input />
                </Form.Item>
                <Form.Item label="Description" name="description">
                  <Input.TextArea />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Create
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Create Types of Insurances" bordered={false}>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>

                <Form.Item label="Insurance" name="insurance">
                  <Input />
                </Form.Item>
                <Form.Item label="Description" name="description">
                  <Input.TextArea />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Create
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </Content >
  );
};

export default Insurance;
