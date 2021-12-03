import "antd/dist/antd.css";
import {
  Layout,
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  Option,
} from "antd";
import FormItem from "antd/lib/form/FormItem";
const Insurance = () => {
  const { Content } = Layout;
  const { Option } = Select;

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
        <Row gutter={30}>
          <Col span={12}>
            <Card title="Create Insurances" bordered={false}>
              <Form
                name="basic"
                labelCol={{
                  span: 5,
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
                <Form.Item label="Type">
                  <Form.Item
                    name={["type"]}
                    noStyle
                    rules={[{ required: true, message: "Type is required" }]}
                  >
                    <Select placeholder="Select Type">
                      <Option value="Business">Business</Option>
                      <Option value="Agriculture">Agriculture</Option>
                    </Select>
                  </Form.Item>
                </Form.Item>
                <Form.Item label="Description" name="description">
                  <Input.TextArea />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 5,
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
          <Col span={12}>
            <Card title="Create Types of Insurances" bordered={false}>
              <Form
                name="basic"
                labelCol={{
                  span: 5,
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
                <Form.Item label="Insurance">
                  <Form.Item
                    name={["insurance_type"]}
                    noStyle
                    rules={[
                      { required: true, message: "Insurance is required" },
                    ]}
                  >
                    <Select placeholder="Select Insurance">
                      <Option value="Insurance">Insurance</Option>
                      <Option value="Expired">Expired</Option>
                    </Select>
                  </Form.Item>
                </Form.Item>
                <Form.Item label="Description" name="description">
                  <Input.TextArea />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 5,
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
