import React, { useState, usememo } from "react";
import UserList from "./components/userTable";
import UserForm from "./components/userForm";
function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "user1", email: "user1@example.com", role: "admin" },
    { id: 2, username: "user2", email: "user2@example.com", role: "user" },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setIsEditing(true);
    setEditingUser(user);
  };
  const handleOpen = () => {
    setIsEditing(true);
    setEditingUser({});
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditingUser(null);
  };
  const handleSubmit = (user) => {
    if (Object.keys(editingUser).length === 0) {
      const userResult = user;
      userResult.id = users.length + 1;
      setUsers([...users, userResult]);
    } else {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    }
    setIsEditing(false);
    setEditingUser(null);
  };

  return (
    <>
      <UserList
        users={users}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onOpen={handleOpen}
      />
      <UserForm
        initialValues={editingUser}
        isOpen={isEditing}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </>
  );
}

export default App;
