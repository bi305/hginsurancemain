import "antd/dist/antd.css";
import { Layout, Button } from "antd";

const Head = () => {
  const { Header } = Layout;
  return (
    <>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      >
        {/* <Button type="primary" style={{ color: "black" }}>
          Logout
        </Button> */}
      </Header>
    </>
  );
};

export default Head;
