import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <ListGroup className='mt-4'>
      {users.map((user) => {
        return (
          <ListGroupItem
            key={user.id}
            className='d-flex justify-content-between'
          >
            <strong>{user.name}</strong>
            <div className='ml-auto'>
              <Link
                to={`/edit/${user.id}`}
                className='btn btn-secondary'
                style={{ marginRight: "1rem" }}
              >
                Edit
              </Link>
              <Button
                onClick={() => {
                  removeUser(user.id);
                }}
                className='btn btn-warning'
              >
                Delete
              </Button>
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default UserList;
