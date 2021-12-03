import "antd/dist/antd.css";
import { Layout } from "antd";

const EditProfile = () => {
  const { Content } = Layout;
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: "100vh" }}
      >
        EditProfile
      </div>
    </Content >
  );
};

export default EditProfile;
