import "antd/dist/antd.css";
import { Layout } from "antd";

const Foot = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};

export default Foot;
