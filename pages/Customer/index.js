import "antd/dist/antd.css";
import { Layout, Table, Tag, Space } from "antd";

const Customer = () => {
  const { Content } = Layout;
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Id Card",
      dataIndex: "id_card",
      key: "id_card",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Insurance",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            // let color = tag.length > 5 ? "geekblue" : "green";
            let color = "green";
            if (tag === "expired") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Martial Status",
      dataIndex: "martial_status",
      key: "martial_status",
    },
  ];

  const data = [
    {
      id: "1",
      name: "John Brown",
      phone: "+2376532",
      id_card: "840911-4567-658",
      address: "New York No. 1 Lake Park",
      email: "demo@gmail.com",
      tags: ["active"],
      martial_status: "M",
    },
    {
      id: "2",
      name: "Jim Green",
      phone: "+2376542",
      id_card: "840911-4567-658",
      address: "London No. 1 Lake Park",
      email: "demo@gmail.com",
      tags: ["expired"],
      martial_status: "S",
    },
    {
      id: "3",
      name: "Joe Black",
      phone: "+2376532",
      id_card: "840911-4567-658",
      address: "Sidney No. 1 Lake Park",
      email: "demo@gmail.com",
      tags: ["active"],
      martial_status: "M",
    },
    {
      id: "3",
      name: "Joe Black",
      phone: "+2376532",
      id_card: "840911-4567-658",
      address: "Sidney No. 1 Lake Park",
      email: "demo@gmail.com",
      tags: ["expired"],
      martial_status: "M",
    },
    {
      id: "3",
      name: "Joe Black",
      phone: "+2376532",
      id_card: "840911-4567-658",
      address: "Sidney No. 1 Lake Park",
      email: "demo@gmail.com",
      tags: ["active"],
      martial_status: "M",
    },
    {
      id: "3",
      name: "Joe Black",
      phone: "+2376532",
      id_card: "840911-4567-658",
      address: "Sidney No. 1 Lake Park",
      email: "demo@gmail.com",
      tags: ["expired"],
      martial_status: "M",
    },
    {
      id: "3",
      name: "Joe Black",
      phone: "+2376532",
      id_card: "840911-4567-658",
      address: "Sidney No. 1 Lake Park",
      email: "demo@gmail.com",
      tags: ["active"],
      martial_status: "M",
    },
    {
      id: "3",
      name: "Joe Black",
      phone: "+2376532",
      id_card: "840911-4567-658",
      address: "Sidney No. 1 Lake Park",
      email: "demo@gmail.com",
      tags: ["expired"],
      martial_status: "M",
    },
  ];
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: "100vh" }}
      >
        <h1> All Customer </h1>
        <Table columns={columns} dataSource={data} />
      </div>
    </Content>
  );
};

export default Customer;
