import React, { useContext, useRef, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const nameRef = useRef();

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      return;
    }

    navigate("/");
    const newUser = {
      id: uuidv4(),
      name,
    };
    setName("");
    addUser(newUser);
    nameRef.current.focus();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          ref={nameRef}
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Name...'
        />
      </FormGroup>
      <Button type='submit'>Add Name</Button>
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

export default AddUser;
