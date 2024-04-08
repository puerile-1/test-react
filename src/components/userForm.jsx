import React, { useEffect, useState } from "react";
import { Form, Input, Button, Modal } from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const UserForm = ({ initialValues = {}, onSubmit, onCancel, isOpen }) => {
  const [form] = Form.useForm();
  form.setFieldsValue(initialValues);
  console.log(111);
  const handleCancel = () => {
    onCancel();
    form.setFieldsValue({ id: "", username: "", email: "", role: "" });
  };
  const onFinish = () => {
    onSubmit(form.getFieldsValue());
    form.setFieldsValue({ id: "", username: "", email: "", role: "" });
  };

  return (
    <Modal
     forceRender
      title={JSON.stringify(initialValues) === '{}'?'新增':'编辑' }
      open={isOpen}
      onOk={onFinish}
      onCancel={handleCancel}
      okText={"确认"}
      cancelText={"取消"}
      
    >
      <Form form={form} {...layout} >
      <Form.Item label="ID" name="id" hidden>
          <Input disabled/>
        </Form.Item>
        <Form.Item label="用户名" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="角色" name="role">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;
