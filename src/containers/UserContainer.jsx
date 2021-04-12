import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "../components/Users";
import getUsers from "../modules";

const UserContainer = ({ users, getUsers }) => {
  useEffect(() => {
    if (users) return;
    getUsers();
  }, [getUsers, users]);

  return <Users users={users}></Users>;
};

//이미 있는 정보를 재요청하지 않게 처리
export default connect(
  (state) => ({
    users: state.users.users,
  }),
  {
    getUsers,
  }
)(UserContainer);
