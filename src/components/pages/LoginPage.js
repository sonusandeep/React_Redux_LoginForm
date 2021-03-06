import React from "react";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { withRouter, Redirect } from "react-router-dom";

const LoginPage = ({ user, history, login }) => {
  if (user.role) {
    return <Redirect to="/user" />;
  }

  return (
    <div>
      <h2 className="text-center">Login System</h2>
      <br />
      <LoginForm user={user} onLoginClicked={user => login(user)} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch({ type: "USER_LOGIN_REQUESTED", user })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);
