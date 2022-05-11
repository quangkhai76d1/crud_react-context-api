import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

const EditUser = (props) => {
  const { users, editUser } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });

  let { currentId } = useParams();

  useEffect(() => {
    const userId = currentId;
    const selectedUser = users.find((user) => user._id === userId);
    setSelectedUser(selectedUser);
  }, [users, currentId]);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate("/");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type='text'
          name='name'
          value={selectedUser.name}
          onChange={(e) => {
            setSelectedUser({
              ...selectedUser,
              [e.target.name]: e.target.value,
            });
          }}
          placeholder='Enter Name...'
        />
      </FormGroup>
      <Button type='submit'>Edit Name</Button>
      <Link
        to='/'
        className='btn btn-danger ml-2'
        style={{ marginLeft: "1rem" }}
      >
        Cancel
      </Link>
    </Form>
  );
};

export default EditUser;
