import React from "react";
import { Table, Button, Popconfirm } from "antd";

const UserTable = ({ users, onDelete, onEdit, onOpen }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <>
          <Button
            key="edit"
            style={{ marginRight: "16px" }}
            type="link"
            onClick={() => onEdit(record)}
          >
            编辑
          </Button>

          <Popconfirm
            title="删除"
            description="确认删除吗?"
            onConfirm={() => onDelete(record.id)}
            okText="确认"
            cancelText="取消"
            key="del"
          >
            <Button type="link" danger>
              删除
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <>
      <Button
        style={{ marginBottom: "16px" }}
        type="primary"
        onClick={() => onOpen()}
      >
        新增
      </Button>
      <Table bordered rowKey="id" dataSource={users} columns={columns} />
    </>
  );
};

export default UserTable;
