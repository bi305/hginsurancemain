import { Layout } from "antd";
import Foot from "./Footer";
import Head from "./Header";
import Sidebar from "./Sidebar";

const Lay = ({ children }) => {
  return (
    <>
      <Layout>
        <Sidebar />
        <Layout>
          <Head />
          {children}
        </Layout>
      </Layout>
      {/* <Foot /> */}
    </>
  );
};

export default Lay;
