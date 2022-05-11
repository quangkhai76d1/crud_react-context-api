import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import AppReducer from "./AppReducer";

//initialState

const initialState = {
  users: [],
};

//createContext

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (payload) => {
    dispatch({
      type: "ADD_USER",
      payload,
    });
  };

  const editUser = (payload) => {
    dispatch({
      type: "EDIT_USER",
      payload,
    });
  };
  return (
    <GlobalContext.Provider
      value={{ users: state.users, removeUser, addUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };
export default GlobalProvider;
